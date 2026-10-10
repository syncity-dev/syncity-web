import { describe, expect, it } from 'vitest';

import { pageTitle } from './seo';

describe('pageTitle', () => {
  it('puts the page first and the brand after an em dash', () => {
    expect(pageTitle('Blog')).toBe('Blog — Syncity');
  });
});
