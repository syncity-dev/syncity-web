# Decision Log

Architecturally significant decisions, newest first. One entry per decision.

An entry belongs here when the decision is expensive to reverse, constrains future
work, or would otherwise have to be re-litigated by whoever reads the code next —
a framework or library commitment, a rendering or data-flow architecture, a
deliberately accepted risk. Routine implementation choices do not belong here.

---

## 2026-10-10 — Show drafts on the develop deploy, and keep it out of search

**Context** — `develop` deploys to Netlify at develop.syncity.dev and `main` to GitHub Pages. Draft posts only appeared in `pnpm dev`, so anyone who doesn't run the code had no way to review a post before it went live.

**Decision** — A `VITE_SHOW_DRAFTS=true` environment variable, set only on the Netlify develop site, makes the build include drafts (`src/utils/env.ts`). When it is set, every page also gets `<meta name="robots" content="noindex">`, so drafts and the duplicate site stay out of search engines. The GitHub Pages build never sets it.

**Alternative rejected** — Per-PR preview deploys: useful later, but the develop deploy already exists and covers reviewing posts. Showing drafts on develop without `noindex`: drafts would become public, indexable pages.

**Consequences** — A draft is public at develop.syncity.dev to anyone with the link, so anything confidential must not go into a draft. The blog appears on the develop deploy even while every post is a draft, and stays hidden in production until one is published.

**Tickets** — SW-39

---

## 2026-10-09 — Production builds must run with `NODE_ENV` unset or `production`

**Context** — SW-39 is the first route to use the static server functions from SW-38. A local `pnpm build` with `NODE_ENV=development` (set in a developer's `.env.local`) produced a site that looked fine but was broken in two ways. Vite reported `import.meta.env.PROD` as false, so draft posts were published. And `staticFunctionMiddleware` only writes its JSON files when `NODE_ENV === 'production'`, so no files were written, and opening a post from `/blog` would have called a server that GitHub Pages does not have.

**Decision** — Draft filtering checks `import.meta.env.MODE`, which stays `production` for any `vite build` whatever `NODE_ENV` says. The static function files can't be fixed the same way, because the library reads `NODE_ENV` itself. So every deploy build must run with `NODE_ENV` unset: GitHub Actions takes it from the `NODE_ENV` repository variable, and the Netlify develop site (develop.syncity.dev) from its environment variables. Netlify had `NODE_ENV=development` set for all contexts, which has to be deleted. Unset is better than `production`, because pnpm skips devDependencies under `NODE_ENV=production`, and `pnpm prepare` needs `@pandacss/dev` to generate `src/styled-system/`.

**Alternative rejected** — Forcing `NODE_ENV=production` in the `build` script: it would hide a misconfigured environment instead of fixing it, and it changes how every developer's local build behaves.

**Consequences** — A build to check locally needs `NODE_ENV=production pnpm build` if `.env.local` sets `NODE_ENV`. A quick check after any build: `dist/client/__tsr/staticServerFnCache/` should contain one JSON file per post plus one for the post list.

**Tickets** — SW-39

---

## 2026-10-07 — Filter and paginate the blog index in the browser, via search params

**Context** — The blog will eventually need a topic filter and pagination. The site is
fully prerendered and hosted on GitHub Pages, which serves only the files in
`dist/client` and cannot render a page per request. A URL such as `/blog?tag=react`
is therefore always the one prerendered `/blog` page; any per-request behaviour has to
run in the browser.

**Decision** — `/blog` stays a single prerendered page that carries the metadata of
every published post (title, date, author, tags, description — a few KB even at 100
posts). Filtering and paging happen client-side, with state in typed TanStack Router
search params: `/blog?tag=frontend&page=2`. Unknown tags and out-of-range pages fall
back to `/blog`. Post pages stay fully prerendered. Topics come from frontmatter
`tags`, which should be restricted to a fixed list in the post schema so a typo cannot
create a topic. The filter appears from roughly eight posts across two or more topics;
pagination once a list passes ten posts.

**Alternative rejected** — Prerendering one path per state (`/blog/tag/$tag`,
`/blog/page/$page` and their combinations): every view becomes indexable, but the
route count grows with topics × pages for a blog expected to stay small. Moving to a
host with a server (Nitro on Node, Vercel, Netlify, Cloudflare) to render filtered
views on request: only worth it if content must change without a deploy, and every
push to `main` already rebuilds the site.

**Consequences** — Filtered and paged views are not separate indexed pages; the
accepted cost is that search engines index the posts, not topic listings. The index
page's payload grows with the post count, so revisit this if the archive reaches
several hundred posts. Moving to a server host later would let the same search params
render server-side without changing the URLs. The Dockerfile in the repository is
stale (it copies a Next.js `.next/standalone` build) and must be rewritten before any
such move.

**Tickets** — none yet; follow-up to SW-36 (Design: Syncity Blog canvas, "Growth" row)

---

## 2026-10-07 — Parse posts in a static server function, not directly in the loader

**Context** — SW-38 requires `parseMarkdown()` to run in the route loader so parsing
happens at build time. In TanStack Start, loaders also run in the browser on
client-side navigation, so a loader that calls the parser directly would parse at
build time only for prerendered first loads — every client navigation would ship the
parser and the raw markdown of every post (the `import.meta.glob` in `posts.ts` is
eager) to the browser and parse there.

**Decision** — Loaders call `getPostDocument` (`src/utils/posts.functions.ts`), a
`createServerFn` wrapped in `staticFunctionMiddleware` from
`@tanstack/start-static-server-functions`. During prerender its result is written to
`/__tsr/staticServerFnCache/*.json`; client navigations fetch that JSON. The loader
returns the serializable AST, and `PostBody` renders it — the parser never reaches the
client. Adding the package required bumping `@tanstack/react-start` to `^1.168.60`
(its peer range).

**Alternative rejected** — A plain `createServerFn`: no new dependency, but client
navigations would call a server endpoint, and production has none: the site deploys to
GitHub Pages as the static `dist/client` folder. Every client-side navigation to a post
would fail in production while working in `pnpm dev`. Calling `parseMarkdown()`
directly in the loader: matches the ticket's wording, but ships the parser and all post
sources to the client.

**Consequences** — Every blog route (SW-39) and the RSS feed (SW-41) should load post
bodies through `getPostDocument` rather than importing `posts.ts` from route code.
Static function results exist only for prerendered inputs, so every post must be
reachable by the prerender crawl. This is also what makes the approach work on GitHub
Pages: the cached results are plain JSON files inside `dist/client`, served like any
other asset. Any future server function used by a page must be static in the same way
for as long as the site stays on a static host. The syntax highlighter runs on both the server and in the browser, which is why it is a small
class-emitting library with an explicit language list (`src/utils/highlight.ts`).

**Tickets** — SW-38, SW-39

---

## 2026-10-07 — Pin `@tanstack/markdown` and `@tanstack/highlight` at 1.0.0

**Context** — The 2026-09-25 entry accepted `@tanstack/markdown` `0.0.15` as an alpha
dependency. Both packages shipped 1.0.0 before SW-38 started (markdown on 2026-10-01,
highlight on 2026-09-30). SW-38's timeboxed spike rendered a fixture covering nested
and tight lists, a loose list, an aligned table, numbered and named footnotes, inline
and code blocks, an image, and a blockquote containing a list. Output was correct on
1.0.0, and the parsed AST round-trips through JSON unchanged.

**Decision** — Proceed with TanStack Markdown, exact-pinned at `1.0.0` for both
packages. This supersedes the alpha pin and the alpha risk accepted on 2026-09-25;
the component-map architecture recorded there is unchanged. Highlighting uses Highlight's
class-based output mapped onto new `syntax.*` semantic tokens, so code blocks follow
the `data-color-mode` attribute through CSS variables with no re-render.

**Alternative rejected** — Staying on `0.0.15` as originally accepted: no benefit over
a stable release of the same API. Highlight's bundled themes via `createThemeCss`:
they hardcode hex colors and a `.dark` selector, bypassing the token system.

**Consequences** — The spike fallback (unified / remark) is not needed. Upgrades stay
manual because of the exact pin. Code blocks in a language not registered in
`src/utils/highlight.ts` render as escaped plaintext until it is added there.

**Tickets** — SW-38

---

## 2026-09-25 — Vitest as the project's test runner

**Context** — SW-37 requires unit tests for the blog content pipeline, and the repo had
no test infrastructure at all: no runner, no config, no `test` script. Satisfying the
ticket meant choosing one, so this sets the testing approach for the whole project
rather than for one subtask.

**Decision** — Vitest, as a devDependency, with a `vitest.config.ts` carrying the `@`
alias and a node environment. Tests are co-located as `*.test.ts` beside the code.

**Alternative rejected** — Jest. It needs its own transform pipeline and ESM
configuration to match a Vite + TypeScript project, and it does not understand
`import.meta.glob`. That last point is not cosmetic: the content pipeline is built on
that glob, and under Vitest the tests exercise the real wiring against
`src/content/posts` instead of only in-memory fixtures.

**Consequences** — Test-runner tooling is settled for everything that follows; later
suites should extend this setup rather than introduce a second runner. A DOM
environment and a component-testing library are deliberately not set up yet — add them
when the first component test needs them, not before.

**Tickets** — SW-37

---

## 2026-09-25 — Render markdown with `@tanstack/markdown`, accepting its alpha status

**Context** — SW-36 adds a markdown blog. Markdown nodes are mapped onto existing
`core/` atoms rather than rendered to an HTML string: rendering to HTML would need a
prose recipe, and Panda CSS has no maintained typography preset
(`pandacss-preset-typography` last published `0.1.6` on 2024-06-08, predating Panda v1
while this project is on `^1.10.0`), so that recipe would be hand-written and
maintained indefinitely. Two renderers support a component map.

**Decision** — Use `@tanstack/markdown` (with `@tanstack/highlight`), pinned to exact
versions, despite it being alpha (`0.0.15`, released 2026-07-24, matching 403 of 652
CommonMark examples). The team accepted the alpha risk explicitly.

**Alternative rejected** — `unified` / `remark` with `html-react-parser`. It supports
element replacement and maps onto the same atoms, but costs nine dependencies instead
of one, needs `remark-gfm`, `rehype-slug` and `rehype-autolink-headings` for features
TanStack Markdown has built in, and gives Shiki dual-theme highlighting instead of
CSS-variable theming — the latter matches this site's attribute-driven color mode.

**Consequences** — Parsing runs at build time in the route loader, so a parser failure
fails the build rather than reaching users. The exact pin means no forced upgrade path.
If the bet goes wrong, only the renderer (SW-38) is rewritten; the component-map
architecture holds under either library.

**Tickets** — SW-36, SW-38
