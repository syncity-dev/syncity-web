import { describe, expect, it } from 'vitest';

import { pageTitle, siteUrl } from './seo';

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
