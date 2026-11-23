# 004 · Parse posts in a static server function, not directly in the loader

**Status.** Accepted

**Date.** 2026-10-07

**Decision.** Loaders call `getPostDocument` (`src/utils/posts.functions.ts`), a `createServerFn` wrapped in `staticFunctionMiddleware` from `@tanstack/start-static-server-functions`. During prerender its result is written to `/__tsr/staticServerFnCache/*.json`; client navigations fetch that JSON. The loader returns the serializable AST, and `PostBody` renders it, so the parser never reaches the client. Adding the package required bumping `@tanstack/react-start` to `^1.168.60` (its peer range).

**Why.** SW-38 requires `parseMarkdown()` to run in the route loader so parsing happens at build time. In TanStack Start, loaders also run in the browser on client-side navigation, so a loader that calls the parser directly would parse at build time only for prerendered first loads. Every client navigation would ship the parser and the raw markdown of every post (the `import.meta.glob` in `posts.ts` is eager) to the browser and parse there.

**Alternatives rejected.** A plain `createServerFn`: no new dependency, but client navigations would call a server endpoint, and production has none: the site deploys to GitHub Pages as the static `dist/client` folder. Every client-side navigation to a post would fail in production while working in `pnpm dev`. Calling `parseMarkdown()` directly in the loader: matches the ticket's wording, but ships the parser and all post sources to the client.

**Consequences.** Every blog route (SW-39) and the RSS feed (SW-41) should load post bodies through `getPostDocument` rather than importing `posts.ts` from route code. Static function results exist only for prerendered inputs, so every post must be reachable by the prerender crawl. This is also what makes the approach work on GitHub Pages: the cached results are plain JSON files inside `dist/client`, served like any other asset. Any future server function used by a page must be static in the same way for as long as the site stays on a static host. The syntax highlighter runs on both the server and in the browser, which is why it is a small class-emitting library with an explicit language list (`src/utils/highlight.ts`).

**Revisit if.** The site moves to a host that runs server functions (SW-43).

**Tickets.** SW-38, SW-39
