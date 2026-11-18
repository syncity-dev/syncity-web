import { mkdtemp, readdir, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

import { afterEach, describe, expect, it } from 'vitest';

import { darkColor, renderPostCard, writePostCard } from './postCards';

// A PNG stores its width and height as the first two numbers after the 16-byte header.
const pngSize = (png: Buffer) => ({ width: png.readUInt32BE(16), height: png.readUInt32BE(20) });

describe('darkColor', () => {
  it('follows a semantic token to its dark palette value', () => {
    expect(darkColor('bg.default')).toBe('#111113');
    expect(darkColor('accent.emphasis')).toBe('#3b9eff');
  });

  it('reads a palette step directly', () => {
    expect(darkColor('gray.12')).toBe('#edeef0');
  });

  it('throws on a token that does not exist', () => {
    expect(() => darkColor('bg.nope')).toThrow(/unknown color token "bg.nope"/);
  });
});

describe('renderPostCard', () => {
  it('draws a 1200 × 630 PNG', async () => {
    const png = await renderPostCard({
      slug: 'hello',
      title: 'What makes Estimum hard to copy',
      description: 'A post.',
      publishedAt: '2026-10-09',
      draft: false,
      author: 'Andrija Kapetanović',
      content: '',
    });

    expect(pngSize(png)).toEqual({ width: 1200, height: 630 });
  });
});

describe('writePostCard', () => {
  let outDir: string;

  afterEach(() => rm(outDir, { recursive: true, force: true }));

  it('writes the card next to a post page', async () => {
    outDir = await mkdtemp(path.join(tmpdir(), 'post-cards-'));

    // Any committed post works. This one is a draft, which the card doesn't care about.
    await writePostCard('/blog/example-post', outDir);

    const png = await readFile(path.join(outDir, 'blog/example-post/og.png'));

    expect(pngSize(png)).toEqual({ width: 1200, height: 630 });
  });

  it.each(['/', '/blog', '/blog/'])('skips %s, which is not a post page', async (pagePath) => {
    outDir = await mkdtemp(path.join(tmpdir(), 'post-cards-'));

    await writePostCard(pagePath, outDir);

    expect(await readdir(outDir)).toEqual([]);
  });
});
