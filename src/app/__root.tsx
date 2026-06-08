import '@fontsource/saira/400.css';
import '@fontsource/saira/500.css';
import '@fontsource/saira/600.css';
import '@fontsource/saira/700.css';
import '@fontsource/saira/800.css';
import '@fontsource/saira/900.css';
import '@fontsource/saira-condensed/500.css';
import '@fontsource/saira-condensed/600.css';
import '@fontsource/saira-condensed/700.css';
import '@fontsource/saira-condensed/800.css';
import '@fontsource/saira-condensed/900.css';

import sairaRegular from '@fontsource/saira/files/saira-latin-400-normal.woff2?url';
import sairaCondensedBold from '@fontsource/saira-condensed/files/saira-condensed-latin-700-normal.woff2?url';
import { createRootRoute } from '@tanstack/react-router';

import { NotFound } from '@/components/shared/NotFound/NotFound';
import { RootLayout } from '@/components/shared/RootLayout/RootLayout';
import { seo } from '@/utils/seo';

import appCss from './globals.css?url';

const SITE_URL = 'https://syncity.dev';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Syncity',
  url: SITE_URL,
  logo: `${SITE_URL}/logos/og-image.png`,
  description:
    'Three senior software consultants specializing in long-term product and platform work.',
  sameAs: ['https://github.com/syncity-dev'],
};

export const Route = createRootRoute({
  notFoundComponent: NotFound,
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...seo({
        title: 'Syncity — Independent Software Consultants',
        description:
          'Three senior software consultants. No handoffs, no account managers — we embed in your team and stay for the long haul.',
        url: SITE_URL,
        image: `${SITE_URL}/logos/og-image.png`,
      }),
    ],
    links: [
      { rel: 'canonical', href: SITE_URL },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: sairaRegular,
        crossOrigin: 'anonymous',
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: sairaCondensedBold,
        crossOrigin: 'anonymous',
      },
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: '32x32' },
      { rel: 'apple-touch-icon', href: '/logos/apple-touch-icon.png' },
    ],
    scripts: [{ type: 'application/ld+json', children: JSON.stringify(jsonLd) }],
  }),
  component: RootLayout,
});
