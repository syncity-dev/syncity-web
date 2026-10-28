import { createFileRoute } from '@tanstack/react-router';

import { Home } from '@/components/features/HomePage/Home';
import { canonicalLink, siteUrl } from '@/utils/seo';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [{ property: 'og:url', content: siteUrl('/') }],
    links: [canonicalLink('/')],
  }),
  component: Home,
});
