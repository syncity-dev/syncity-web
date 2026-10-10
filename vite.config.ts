import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

import { NAV_LINKS } from './src/constants/navigation';

const sectionLinks = NAV_LINKS.map((link) => link.href).filter((href) => href.startsWith('/#'));

export default defineConfig({
  base: '/',
  server: { port: 3000 },
  resolve: {
    alias: { '@': path.resolve('./src') },
  },
  plugins: [
    tanstackStart({
      srcDirectory: 'src',
      router: {
        routesDirectory: 'app',
        basepath: '/',
      },
      // Links the crawler would otherwise add to the sitemap as separate pages: the `/#work`
      // style section links (all the homepage) and `/blog/`, the same page as `/blog`.
      pages: ['/blog/', ...sectionLinks].map((path) => ({
        path,
        prerender: { enabled: false },
        sitemap: { exclude: true },
      })),
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoSubfolderIndex: true,
      },
      sitemap: {
        enabled: true,
        host: 'https://syncity.dev',
      },
    }),
    viteReact(),
  ],
});
