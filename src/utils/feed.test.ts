import { describe, expect, it } from 'vitest';

import { buildRssFeed } from './feed';
import type { PostSummary } from './postFrontmatter';

const summary = (overrides: Partial<PostSummary> = {}): PostSummary => ({
  slug: 'hello-world',
  title: 'Hello World',
  description: 'A first post.',
  publishedAt: '2026-09-20',
  draft: false,
  author: 'Syncity Team',
  ...overrides,
});

describe('buildRssFeed', () => {
  it('writes an item with an absolute link, guid and RFC 822 date', () => {
    const feed = buildRssFeed([summary()]);

    expect(feed).toContain('<title>Hello World</title>');
    expect(feed).toContain('<link>https://syncity.dev/blog/hello-world</link>');
    expect(feed).toContain('<guid isPermaLink="true">https://syncity.dev/blog/hello-world</guid>');
    expect(feed).toContain('<description>A first post.</description>');
    expect(feed).toContain('<pubDate>Sun, 20 Sep 2026 00:00:00 GMT</pubDate>');
  });

  it('links to its own absolute address', () => {
    expect(buildRssFeed([])).toContain(
      '<atom:link href="https://syncity.dev/rss.xml" rel="self" type="application/rss+xml"/>',
    );
  });

  it('keeps the order it is given', () => {
    const feed = buildRssFeed([
      summary({ slug: 'newer', title: 'Newer' }),
      summary({ slug: 'older', title: 'Older' }),
    ]);

    expect(feed.indexOf('Newer')).toBeLessThan(feed.indexOf('Older'));
  });

  it('escapes characters that would break the XML', () => {
    const feed = buildRssFeed([summary({ title: 'Tom & Jerry <3', description: '"Quotes"' })]);

    expect(feed).toContain('<title>Tom &#x26; Jerry &#x3C;3</title>');
    expect(feed).toContain('<description>&#x22;Quotes&#x22;</description>');
  });

  it('is a valid channel with no items when nothing is published', () => {
    const feed = buildRssFeed([]);

    expect(feed).not.toContain('<item>');
    expect(feed).toContain('</channel>');
  });
});
