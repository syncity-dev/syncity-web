# Decision Log

Architecturally significant decisions, newest first. One entry per decision.

An entry belongs here when the decision is expensive to reverse, constrains future
work, or would otherwise have to be re-litigated by whoever reads the code next —
a framework or library commitment, a rendering or data-flow architecture, a
deliberately accepted risk. Routine implementation choices do not belong here.

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
