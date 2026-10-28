export const SITE_URL = 'https://syncity.dev';

/** The share image for pages that don't set their own. */
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logos/og-image.png`;

/** Absolute URL for a site path, e.g. `/blog` → `https://syncity.dev/blog`. Absolute URLs pass through unchanged. */
export const siteUrl = (path: string) => new URL(path, SITE_URL).href;

/** The canonical link for a page, so search engines don't treat it as a copy of another one. */
export const canonicalLink = (path: string) => ({ rel: 'canonical', href: siteUrl(path) });

/** Title for every page except the homepage, e.g. `Blog — Syncity`. One place for the separator. */
export const pageTitle = (title: string) => `${title} — Syncity`;

export const seo = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  publishedAt,
  author,
}: {
  title: string;
  description?: string;
  image?: string;
  keywords?: string;
  url?: string;
  /** `article` for blog posts. The `article:*` tags are only added for articles. */
  type?: 'website' | 'article';
  /** ISO date, e.g. `2026-09-20`. */
  publishedAt?: string;
  author?: string;
}) => {
  const isArticle = type === 'article';

  const tags = [
    { title },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { property: 'og:type', content: type },
    ...(isArticle && publishedAt
      ? [{ property: 'article:published_time', content: publishedAt }]
      : []),
    ...(isArticle && author ? [{ property: 'article:author', content: author }] : []),
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { name: 'twitter:card', content: image ? 'summary_large_image' : 'summary' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    ...(url ? [{ property: 'og:url', content: url }] : []),
    ...(image
      ? [
          { property: 'og:image', content: image },
          { name: 'twitter:image', content: image },
        ]
      : []),
  ];

  return tags;
};
