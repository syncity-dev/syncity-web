# 009 · Draw a share card for every post at build time with satori and resvg

**Status.** Accepted

**Date.** 2026-10-28

**Decision.** The build draws a 1200 × 630 PNG for each prerendered post with `satori` (layout to SVG) and `@resvg/resvg-js` (SVG to PNG), both devDependencies. The prerender step's `onSuccess` hook in `vite.config.ts` calls `src/build/postCards.tsx`, which writes `dist/client/blog/<slug>/og.png` next to the post's page. The card uses the dark mode values of the semantic color tokens (`bg.default`, `accent.emphasis`, ...), Saira, and the Syncity logo. `ogImage` in a post's frontmatter replaces the card. Because every prerendered post gets a card and a failed card fails the build, post pages never fall back to the site-wide image. That image stays the default for the other pages.

**Why.** Every post shared the site-wide `og-image.png`, so links to different posts looked the same in Slack, LinkedIn and X. The site is static on GitHub Pages, so nothing can draw an image when it is requested.

**Alternatives rejected.** A main image required for every post: more work for each post, and most posts have no natural picture. The site-wide image for every post: free, but every post looks the same when shared. A server route prerendered as `og.png`: the prerender step saves responses as text, which corrupts a PNG.

**Consequences.** Four workarounds keep this running, each noted in the code:

- **Relative imports:** `postCards.tsx` and `src/utils/postFrontmatter.ts` load with the Vite config, so they can't use the `@/` alias, `import.meta.glob` or `import.meta.env`. That is why the frontmatter parsing moved out of `posts.ts`.
- **satori loads late:** it is imported when the first card is drawn. A dependency of satori breaks when NODE_ENV changes between loading the config and prerendering.
- **Failures set the exit code:** the prerender step ignores errors from `onSuccess`, so the hook sets `process.exitCode` itself.
- **Output folder from TanStack Start:** the hook reads the folder the pages go into from `TSS_CLIENT_OUTPUT_DIR`, which TanStack Start sets before prerendering. It isn't documented, so if it's ever missing the build fails instead of writing cards where the site isn't served.

`pnpm dev` doesn't draw cards, so a post's `og:image` points at a missing file there. Run the `postCards` tests or a build to see a card. A redesign of the card means changing `postCards.tsx` by hand, because it can't use Panda styles.

**Revisit if.** The site moves to a host that can draw images on request (SW-43), or the prerender step stops corrupting binary responses.

**Tickets.** SW-40
