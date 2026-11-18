import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

import { writePostCard } from './src/build/postCards';
import { NAV_LINKS } from './src/constants/navigation';

// TanStack Start's default client output folder, which GitHub Pages serves.
const clientOutDir = path.resolve('dist/client');

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
        // Draws each post's share card as a static PNG next to its page. The prerender step ignores
        // errors thrown here, so a failed card sets the exit code itself to fail the build.
        onSuccess: ({ page }) =>
          writePostCard(page.path, clientOutDir).catch((error: unknown) => {
            console.error(`[post cards] ${page.path}: could not draw the share card`, error);
            process.exitCode = 1;
          }),
      },
      sitemap: {
        enabled: true,
        host: 'https://syncity.dev',
      },
    }),
    viteReact(),
  ],
});
