import { createFileRoute, notFound } from '@tanstack/react-router';

import { BlogIndex } from '@/components/features/Blog/BlogIndex/BlogIndex';
import { getPostSummaries } from '@/utils/posts.functions';
import { pageTitle } from '@/utils/seo';

export const Route = createFileRoute('/blog/')({
  loader: async () => {
    const posts = await getPostSummaries();

    // No published posts means no blog: /blog is a 404 and nothing links to it.
    if (posts.length === 0) {
      throw notFound();
    }

    return posts;
  },
  head: () => ({ meta: [{ title: pageTitle('Blog') }] }),
  component: BlogIndexRoute,
});

function BlogIndexRoute() {
  const posts = Route.useLoaderData();

  return <BlogIndex posts={posts} />;
}
