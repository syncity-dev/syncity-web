# 010 · Each deploy sets its own site address with `VITE_SITE_URL`

**Status.** Accepted

**Date.** 2026-11-21

**Decision.** `VITE_SITE_URL` sets the address a build is deployed to, and it falls back to `https://syncity.dev` when empty (`src/utils/seo.ts`; `vite.config.ts` reads it with `loadEnv` for the sitemap). The develop deploy sets `VITE_SITE_URL=https://develop.syncity.dev` in its host's build settings. Production sets nothing. The production address lives in `src/utils/site.ts`, which doesn't read `import.meta.env`, so the Vite config can import it.

**Why.** Share images, `og:url`, canonical links and the sitemap were all built on a hardcoded `https://syncity.dev`. On the develop deploy, where every post is still a draft, a post's `og:image` pointed at a production card that doesn't exist, so link previews couldn't be checked anywhere before a post went live. The develop site is also moving from Netlify to Cloudflare soon.

**Alternatives rejected.** Reading the host's own variables (Netlify's `URL` and `DEPLOY_PRIME_URL`, or Cloudflare's `CF_PAGES_URL`): they tie the code to one host, and the move to Cloudflare would mean changing it again. One variable we set ourselves works on any host. If Cloudflare preview deploys are added later, their build command can set `VITE_SITE_URL=$CF_PAGES_URL` without a code change.

**Consequences.** On develop, canonical links and the sitemap point at develop.syncity.dev. That is harmless because develop pages are `noindex`. The variable has to be set again when the develop site moves to Cloudflare, or develop falls back to production URLs.

**Revisit if.** Not applicable. Moving develop to Cloudflare (SW-44) means setting the variable again, which is a consequence above.

**Tickets.** SW-40
