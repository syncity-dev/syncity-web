// Kept apart from `seo.ts` because `vite.config.ts` imports it and can't load `import.meta.env`.

export const PRODUCTION_SITE_URL = 'https://syncity.dev';

/** Where the build writes a post's generated share card, next to the post's prerendered page. */
export const postCardPath = (slug: string) => `/blog/${slug}/og.png`;
