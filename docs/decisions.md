# Decision Log

Architecturally significant decisions, newest first. One entry per decision.

An entry belongs here when the decision is expensive to reverse, constrains future
work, or would otherwise have to be re-litigated by whoever reads the code next —
a framework or library commitment, a rendering or data-flow architecture, a
deliberately accepted risk. Routine implementation choices do not belong here.

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
navigations would hit the Nitro server and parse at request time, not build time.
Calling `parseMarkdown()` directly in the loader: matches the ticket's wording, but
ships the parser and all post sources to the client.

**Consequences** — Every blog route (SW-39) and the RSS feed (SW-41) should load post
bodies through `getPostDocument` rather than importing `posts.ts` from route code.
Static function results exist only for prerendered inputs, so every post must be
reachable by the prerender crawl. The syntax highlighter stays isomorphic — it runs
during render on both sides — which is why it is a small class-emitting library with
an explicit language list (`src/utils/highlight.ts`).

**Tickets** — SW-38, SW-39

---

## 2026-10-07 — Pin `@tanstack/markdown` and `@tanstack/highlight` at 1.0.0

**Context** — The 2026-09-25 entry accepted `@tanstack/markdown` `0.0.15` as an alpha
dependency. Both packages shipped 1.0.0 before SW-38 started (markdown on 2026-10-01,
highlight on 2026-09-30). SW-38's timeboxed spike rendered a fixture covering nested
and tight lists, a loose list, an aligned table, numbered and named footnotes, inline
and fenced code, an image, and a blockquote containing a list. Output was correct on
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
manual because of the exact pin. Code fences in a language not registered in
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
