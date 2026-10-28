import { describe, expect, it } from 'vitest';

import { DEFAULT_OG_IMAGE, pageTitle, seo, siteUrl } from './seo';

describe('pageTitle', () => {
  it('puts the page first and the brand after an em dash', () => {
    expect(pageTitle('Blog')).toBe('Blog — Syncity');
  });
});

describe('siteUrl', () => {
  it('turns a site path into an absolute URL', () => {
    expect(siteUrl('/blog/hello-world')).toBe('https://syncity.dev/blog/hello-world');
  });

  it('keeps an absolute URL as it is', () => {
    expect(siteUrl('https://cdn.example.com/og.png')).toBe('https://cdn.example.com/og.png');
  });
});

describe('seo', () => {
  it('keeps the website tags for a page that sets no type, like the homepage', () => {
    expect(seo({ title: 'Syncity', description: 'Consultants.', image: DEFAULT_OG_IMAGE })).toEqual(
      [
        { title: 'Syncity' },
        { name: 'description', content: 'Consultants.' },
        { name: 'keywords', content: undefined },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Syncity' },
        { property: 'og:description', content: 'Consultants.' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Syncity' },
        { name: 'twitter:description', content: 'Consultants.' },
        { property: 'og:image', content: DEFAULT_OG_IMAGE },
        { name: 'twitter:image', content: DEFAULT_OG_IMAGE },
      ],
    );
  });

  it('adds the publish date and author for an article', () => {
    const tags = seo({
      title: 'Post',
      type: 'article',
      publishedAt: '2026-10-09',
      author: 'Syncity Team',
    });

    expect(tags).toContainEqual({ property: 'og:type', content: 'article' });
    expect(tags).toContainEqual({ property: 'article:published_time', content: '2026-10-09' });
    expect(tags).toContainEqual({ property: 'article:author', content: 'Syncity Team' });
  });

  it('leaves out the article tags on a website page, even when they are passed', () => {
    const tags = seo({ title: 'Page', publishedAt: '2026-10-09', author: 'Syncity Team' });

    expect(tags.some((tag) => 'property' in tag && tag.property?.startsWith('article:'))).toBe(
      false,
    );
  });
});
