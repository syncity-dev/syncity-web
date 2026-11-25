# 007 · Show drafts on the develop deploy, and keep it out of search

**Status.** Accepted

**Date.** 2026-10-10

**Decision.** A `VITE_SHOW_DRAFTS=true` environment variable, set only on the Netlify develop site, makes the build include drafts (`src/utils/env.ts`). When it is set, every page also gets `<meta name="robots" content="noindex">`, so drafts and the duplicate site stay out of search engines. The GitHub Pages build never sets it.

**Why.** `develop` deploys to Netlify at develop.syncity.dev and `main` to GitHub Pages. Draft posts only appeared in `pnpm dev`, so anyone who doesn't run the code had no way to review a post before it went live.

**Alternatives rejected.** Per-PR preview deploys: useful later, but the develop deploy already exists and covers reviewing posts. Showing drafts on develop without `noindex`: drafts would become public, indexable pages.

**Consequences.** A draft is public at develop.syncity.dev to anyone with the link, so anything confidential must not go into a draft. The blog appears on the develop deploy even while every post is a draft, and stays hidden in production until one is published.

**Revisit if.** Per-pull-request preview deploys are added, or develop goes behind Cloudflare Access (SW-44), so drafts stop being public.

**Tickets.** SW-39
