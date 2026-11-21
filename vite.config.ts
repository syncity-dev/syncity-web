import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

import { writePostCard } from './src/build/postCards';
import { NAV_LINKS } from './src/constants/navigation';

// TanStack Start sets this before prerendering. It isn't documented, so fail loudly if it disappears.
const clientOutDir = () => {
  const outDir = process.env.TSS_CLIENT_OUTPUT_DIR;

  if (!outDir) {
    throw new Error('TSS_CLIENT_OUTPUT_DIR is not set, so the share cards have nowhere to go');
  }

  return outDir;
};

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
        onSuccess: async ({ page }) => {
          try {
            await writePostCard(page.path, clientOutDir());
          } catch (error) {
            console.error(`[post cards] ${page.path}: could not draw the share card`, error);
            process.exitCode = 1;
          }
        },
      },
      sitemap: {
        enabled: true,
        host: 'https://syncity.dev',
      },
    }),
    viteReact(),
  ],
});
