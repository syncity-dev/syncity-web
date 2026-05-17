import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import '@fontsource/roboto-condensed/500.css';

import { createRootRoute } from '@tanstack/react-router';

import { NotFound } from '@/components/shared/NotFound/NotFound';
import { RootLayout } from '@/components/shared/RootLayout/RootLayout';
import { seo } from '@/utils/seo';

import appCss from './globals.css?url';

export const Route = createRootRoute({
  notFoundComponent: NotFound,
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...seo({
        title: 'Syncity',
        description: 'A team of independent consultants primarily focused on long-term projects.',
      }),
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: '32x32' },
      { rel: 'apple-touch-icon', href: '/logos/apple-touch-icon.png' },
    ],
  }),
  component: RootLayout,
});
