import { createFileRoute, notFound } from '@tanstack/react-router';

import { PostPage } from '@/components/features/Blog/PostPage/PostPage';
import { getPostDocument, getPostSummaries } from '@/utils/posts.functions';
import { pageTitle } from '@/utils/seo';

export const Route = createFileRoute('/blog/$slug')({
  loader: async ({ params }) => {
    // Only slugs from the post list were prerendered. Checking the list first turns an
    // unknown slug into the 404 page instead of a failed fetch and an error screen.
    const posts = await getPostSummaries();
    const index = posts.findIndex((post) => post.slug === params.slug);

    if (index === -1) {
      throw notFound();
    }

    const post = await getPostDocument({ data: params.slug });

    return { post, older: posts[index + 1], newer: posts[index - 1] };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [{ title: pageTitle(loaderData.post.title) }] : [],
  }),
  component: PostRoute,
});

function PostRoute() {
  const { post, older, newer } = Route.useLoaderData();

  return <PostPage post={post} older={older} newer={newer} />;
}
