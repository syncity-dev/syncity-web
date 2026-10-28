import { createFileRoute, notFound } from '@tanstack/react-router';

import { BlogIndex } from '@/components/features/Blog/BlogIndex/BlogIndex';
import { getPostSummaries } from '@/utils/posts.functions';
import { canonicalLink, DEFAULT_OG_IMAGE, pageTitle, seo, siteUrl } from '@/utils/seo';

export const Route = createFileRoute('/blog/')({
  loader: async () => {
    const posts = await getPostSummaries();

    // No published posts means no blog: /blog is a 404 and nothing links to it.
    if (posts.length === 0) {
      throw notFound();
    }

    return posts;
  },
  head: () => ({
    meta: seo({
      title: pageTitle('Blog'),
      description:
        'What we learn keeping software in production for years, written by the three of us when there is something worth saying.',
      url: siteUrl('/blog'),
      image: DEFAULT_OG_IMAGE,
    }),
    links: [canonicalLink('/blog')],
  }),
  component: BlogIndexRoute,
});

function BlogIndexRoute() {
  const posts = Route.useLoaderData();

  return <BlogIndex posts={posts} />;
}
