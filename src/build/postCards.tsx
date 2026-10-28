import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';

import { Resvg } from '@resvg/resvg-js';

import { colorPalettes } from '../theme/colors';
import { colors as semanticColors } from '../theme/semanticTokens/colors';
import { formatPostDate } from '../utils/date';
import type { Post } from '../utils/postFrontmatter';
import { parsePost } from '../utils/postFrontmatter';
import { postCardPath } from '../utils/seo';

// Runs only at build time, from the prerender step in `vite.config.ts`. Nothing in the app imports it.
// Imports are relative because Vite loads its config before the `@/` alias exists.

const WIDTH = 1200;
const HEIGHT = 630;

const POST_PAGE = /^\/blog\/([^/]+)\/?$/;

// Panda's token types don't allow looking up a name built from a string, so this is typed by hand.
type TokenNode = { value?: string | { _dark?: string }; [key: string]: unknown };

const colorTokens: TokenNode = { ...colorPalettes, ...semanticColors };

/**
 * The dark mode value of a color token, following references to the palette:
 * `bg.default` → `{colors.gray.1}` → `#111113`. Throws on a name that doesn't exist.
 */
export const darkColor = (name: string): string => {
  const token = name
    .split('.')
    .reduce<TokenNode | undefined>(
      (node, key) => node?.[key] as TokenNode | undefined,
      colorTokens,
    );
  const value = typeof token?.value === 'string' ? token.value : token?.value?._dark;

  if (!value) {
    throw new Error(`[post cards] unknown color token "${name}", or it has no dark value`);
  }

  const reference = value.match(/^\{colors\.(.+)\}$/)?.[1];

  return reference ? darkColor(reference) : value;
};

// A share image can't follow the reader's color mode, so cards always use the dark colors.
const colors = {
  bg: darkColor('bg.default'),
  fg: darkColor('fg.default'),
  muted: darkColor('fg.muted'),
  // The same blue as the logo on a dark background.
  accent: darkColor('accent.emphasis'),
};

// Resolves packages from the project root. `import.meta.url` doesn't work in code the config loads.
const require = createRequire(path.resolve('package.json'));

const readFont = (file: string) => readFile(require.resolve(`@fontsource/${file}`));

// Satori can't read woff2. The latin-ext subset covers letters like š and ć in team names. It gets
// its own family name: under the same name, satori takes some letters from the wrong file or family.
const loadFonts = async () => {
  const font = async (name: string, pkg: string, weight: 500 | 700) =>
    Promise.all(
      [
        { subset: 'latin', name },
        { subset: 'latin-ext', name: `${name} Ext` },
      ].map(async ({ subset, name }) => ({
        name,
        weight,
        style: 'normal' as const,
        data: await readFont(`${pkg}/files/${pkg}-${subset}-${weight}-normal.woff`),
      })),
    );

  return (
    await Promise.all([
      font('Saira', 'saira', 500),
      font('Saira Condensed', 'saira-condensed', 700),
    ])
  ).flat();
};

const fontFamily = {
  body: 'Saira, Saira Ext',
  heading: 'Saira Condensed, Saira Condensed Ext',
};

let fonts: ReturnType<typeof loadFonts> | undefined;
let logo: Promise<string> | undefined;

const loadLogo = async () => {
  const svg = await readFile(path.resolve('public/logos/logo-dark.svg'));

  return `data:image/svg+xml;base64,${svg.toString('base64')}`;
};

// The logo's viewBox is 855 × 152.
const LOGO_HEIGHT = 48;
const LOGO_WIDTH = Math.round((LOGO_HEIGHT * 855) / 152);

const Card = ({ post, logoSrc }: { post: Post; logoSrc: string }) => (
  <div
    style={{
      width: WIDTH,
      height: HEIGHT,
      display: 'flex',
      backgroundColor: colors.bg,
      fontFamily: fontFamily.body,
    }}
  >
    <div style={{ width: 16, height: '100%', backgroundColor: colors.accent }} />
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '72px 80px',
      }}
    >
      <img src={logoSrc} width={LOGO_WIDTH} height={LOGO_HEIGHT} alt="" />
      <div
        style={{
          display: 'block',
          fontFamily: fontFamily.heading,
          fontWeight: 700,
          fontSize: post.title.length > 60 ? 64 : 80,
          lineHeight: 1.05,
          color: colors.fg,
          lineClamp: 3,
        }}
      >
        {post.title}
      </div>
      <div style={{ display: 'flex', gap: 16, fontSize: 30, fontWeight: 500, color: colors.muted }}>
        <span>{post.author}</span>
        <span style={{ color: colors.accent }}>·</span>
        <span>{formatPostDate(post.publishedAt, 'long')}</span>
      </div>
    </div>
  </div>
);

export const renderPostCard = async (post: Post) => {
  fonts ??= loadFonts();
  logo ??= loadLogo();

  // Loaded here instead of at the top of the file. A satori dependency checks NODE_ENV once when it
  // loads and again on every call, and the build changes NODE_ENV between loading the config and
  // prerendering. If the two checks disagree, every card fails.
  const { default: satori } = await import('satori');

  const svg = await satori(<Card post={post} logoSrc={await logo} />, {
    width: WIDTH,
    height: HEIGHT,
    fonts: await fonts,
  });

  return new Resvg(svg).render().asPng();
};

/**
 * Called for every prerendered page. For a post page, draws its card into `outDir` at
 * `postCardPath(slug)`. Only published posts are prerendered, so drafts never get one.
 */
export const writePostCard = async (pagePath: string, outDir: string) => {
  const slug = pagePath.match(POST_PAGE)?.[1];

  if (!slug) {
    return;
  }

  const filePath = `src/content/posts/${slug}.md`;
  const post = parsePost(filePath, await readFile(path.resolve(filePath), 'utf8'));
  const cardFile = path.join(outDir, postCardPath(slug));

  await mkdir(path.dirname(cardFile), { recursive: true });
  await writeFile(cardFile, await renderPostCard(post));
};
