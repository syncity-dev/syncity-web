import { showDrafts } from '@/utils/env';

import type { Post } from './postFrontmatter';
import { parsePost } from './postFrontmatter';

type RawPostModules = Record<string, { default: string }>;

const postModules = import.meta.glob('../content/posts/*.md', {
  query: '?raw',
  eager: true,
}) as RawPostModules;

// Drafts are hidden in any build unless `showDrafts` is set (the develop deploy). This checks
// MODE because `PROD` is false whenever NODE_ENV=development is set, even during `vite build`.
export const collectPosts = (
  modules: RawPostModules,
  {
    includeDrafts = import.meta.env.MODE !== 'production' || showDrafts,
  }: { includeDrafts?: boolean } = {},
): Post[] =>
  Object.entries(modules)
    .map(([filePath, module]) => parsePost(filePath, module.default))
    .filter((post) => includeDrafts || !post.draft)
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));

export const getAllPosts = (): Post[] => collectPosts(postModules);

export const getPostBySlug = (slug: string): Post | undefined =>
  getAllPosts().find((post) => post.slug === slug);
