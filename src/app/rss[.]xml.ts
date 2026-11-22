import { createFileRoute } from '@tanstack/react-router';

import { buildRssFeed } from '@/utils/feed';
import { getPublishedPosts } from '@/utils/posts';

// Prerendered to a static `rss.xml` by the `pages` entry in `vite.config.ts`.
export const Route = createFileRoute('/rss.xml')({
  server: {
    handlers: {
      GET: () =>
        new Response(buildRssFeed(getPublishedPosts()), {
          headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
        }),
    },
  },
});
