import { BLOG_DESCRIPTION, BLOG_TITLE } from '@/constants/blog';

import type { PostSummary } from './postFrontmatter';
import { siteUrl } from './seo';

export const FEED_PATH = '/rss.xml';

// These five are every character XML reserves, so this covers text and attribute values.
// Numeric references are used because some feed readers show `&amp;` in a title literally.
const escapeXml = (text: string) =>
  text
    .replace(/&/g, '&#x26;')
    .replace(/</g, '&#x3C;')
    .replace(/>/g, '&#x3E;')
    .replace(/"/g, '&#x22;')
    .replace(/'/g, '&#x27;');

// toUTCString() gives the RFC 822 date RSS expects, e.g. `Sun, 20 Sep 2026 00:00:00 GMT`.
const rssDate = (isoDate: string) => new Date(isoDate).toUTCString();

const item = (post: PostSummary) => {
  const link = escapeXml(siteUrl(`/blog/${post.slug}`));

  return [
    '    <item>',
    `      <title>${escapeXml(post.title)}</title>`,
    `      <link>${link}</link>`,
    `      <guid isPermaLink="true">${link}</guid>`,
    `      <description>${escapeXml(post.description)}</description>`,
    `      <pubDate>${rssDate(post.publishedAt)}</pubDate>`,
    '    </item>',
  ].join('\n');
};

/** The RSS 2.0 feed for the given posts, in the order given. */
export const buildRssFeed = (posts: PostSummary[]) =>
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    `    <title>${escapeXml(BLOG_TITLE)}</title>`,
    `    <link>${escapeXml(siteUrl('/blog'))}</link>`,
    `    <description>${escapeXml(BLOG_DESCRIPTION)}</description>`,
    '    <language>en</language>',
    // The validator warns when a feed doesn't link to its own address.
    `    <atom:link href="${escapeXml(siteUrl(FEED_PATH))}" rel="self" type="application/rss+xml"/>`,
    ...posts.map(item),
    '  </channel>',
    '</rss>',
    '',
  ].join('\n');
