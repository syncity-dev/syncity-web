# 006 · Production builds must run with `NODE_ENV` unset or `production`

**Status.** Accepted

**Date.** 2026-10-09

**Decision.** Draft filtering checks `import.meta.env.MODE`, which stays `production` for any `vite build` whatever `NODE_ENV` says. The static function files can't be fixed the same way, because the library reads `NODE_ENV` itself. So every deploy build must run with `NODE_ENV` unset: GitHub Actions takes it from the `NODE_ENV` repository variable, and the Netlify develop site (develop.syncity.dev) from its environment variables. Netlify had `NODE_ENV=development` set for all contexts, which has to be deleted. Unset is better than `production`, because pnpm skips devDependencies under `NODE_ENV=production`, and `pnpm prepare` needs `@pandacss/dev` to generate `src/styled-system/`.

**Why.** SW-39 is the first route to use the static server functions from SW-38. A local `pnpm build` with `NODE_ENV=development` (set in a developer's `.env.local`) produced a site that looked fine but was broken in two ways. Vite reported `import.meta.env.PROD` as false, so draft posts were published. And `staticFunctionMiddleware` only writes its JSON files when `NODE_ENV === 'production'`, so no files were written, and opening a post from `/blog` would have called a server that GitHub Pages does not have.

**Alternatives rejected.** Forcing `NODE_ENV=production` in the `build` script: it would hide a misconfigured environment instead of fixing it, and it changes how every developer's local build behaves.

**Consequences.** A build to check locally needs `NODE_ENV=production pnpm build` if `.env.local` sets `NODE_ENV`. A quick check after any build: `dist/client/__tsr/staticServerFnCache/` should contain one JSON file per post plus one for the post list.

**Revisit if.** `staticFunctionMiddleware` stops reading `NODE_ENV` itself.

**Tickets.** SW-39
