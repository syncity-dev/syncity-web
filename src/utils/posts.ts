import matter from 'gray-matter';
import { z } from 'zod';

import { teamMemberNames } from '@/constants/team';

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Posts are bylined to the company or to one team member — nothing else. */
export const TEAM_AUTHOR = 'Syncity Team';

export const postAuthors = [TEAM_AUTHOR, ...teamMemberNames] as const;

export type PostAuthor = (typeof postAuthors)[number];

/**
 * YAML parses an unquoted `2026-09-20` into a `Date`, while a quoted value stays
 * a string. Normalise both to an ISO date string before validating so authors
 * do not have to remember the quotes.
 */
const publishedAt = z.preprocess(
  (value) =>
    value instanceof Date && !Number.isNaN(value.getTime())
      ? value.toISOString().slice(0, 10)
      : value,
  z.iso.date(),
);

export const postFrontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  publishedAt,
  draft: z.boolean().default(false),
  author: z.enum(postAuthors).default(TEAM_AUTHOR),
  ogImage: z.string().min(1).optional(),
  tags: z.array(z.string().min(1)).optional(),
});

export type PostFrontmatter = z.infer<typeof postFrontmatterSchema>;

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
};

type RawPostModules = Record<string, { default: string }>;

const postModules = import.meta.glob('../content/posts/*.md', {
  query: '?raw',
  eager: true,
}) as RawPostModules;

const slugFromPath = (filePath: string) => {
  const slug = filePath.split('/').pop()?.replace(/\.md$/, '') ?? '';

  if (!SLUG_PATTERN.test(slug)) {
    throw new Error(
      `[posts] ${filePath}: filename does not produce a URL-safe slug. ` +
        `Expected lowercase words separated by single hyphens, got "${slug}".`,
    );
  }

  return slug;
};

export const parsePost = (filePath: string, raw: string): Post => {
  const { data, content } = matter(raw);
  const result = postFrontmatterSchema.safeParse(data);

  if (!result.success) {
    const issues = result.error.issues
      .map((issue) => `  - ${issue.path.join('.') || '(root)'}: ${issue.message}`)
      .join('\n');

    throw new Error(`[posts] ${filePath}: invalid frontmatter\n${issues}`);
  }

  return {
    ...result.data,
    slug: slugFromPath(filePath),
    content: content.trim(),
  };
};

export const collectPosts = (
  modules: RawPostModules,
  { includeDrafts = !import.meta.env.PROD }: { includeDrafts?: boolean } = {},
): Post[] =>
  Object.entries(modules)
    .map(([filePath, module]) => parsePost(filePath, module.default))
    .filter((post) => includeDrafts || !post.draft)
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));

export const getAllPosts = (): Post[] => collectPosts(postModules);

export const getPostBySlug = (slug: string): Post | undefined =>
  getAllPosts().find((post) => post.slug === slug);
