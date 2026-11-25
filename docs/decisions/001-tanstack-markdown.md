# 001 · Render markdown with `@tanstack/markdown`, accepting its alpha status

**Status.** Accepted

**Date.** 2026-09-25

**Decision.** Use `@tanstack/markdown` (with `@tanstack/highlight`), pinned to exact versions, despite it being alpha (`0.0.15`, released 2026-07-24, matching 403 of 652 CommonMark examples). The team accepted the alpha risk explicitly. The version and alpha risk are replaced by [003](003-tanstack-markdown-1-0-pin.md).

**Why.** SW-36 adds a markdown blog. Markdown nodes are mapped onto existing `core/` atoms rather than rendered to an HTML string. Rendering to HTML would need a prose recipe, and Panda CSS has no maintained typography preset (`pandacss-preset-typography` last published `0.1.6` on 2024-06-08, predating Panda v1 while this project is on `^1.10.0`), so that recipe would be hand-written and maintained indefinitely. Two renderers support a component map.

**Alternatives rejected.** `unified` / `remark` with `html-react-parser`. It supports element replacement and maps onto the same atoms, but costs nine dependencies instead of one, needs `remark-gfm`, `rehype-slug` and `rehype-autolink-headings` for features TanStack Markdown has built in, and gives Shiki dual-theme highlighting instead of CSS-variable theming. CSS-variable theming matches this site's attribute-driven color mode.

**Consequences.** Parsing runs at build time in the route loader, so a parser failure fails the build rather than reaching users. The exact pin means no forced upgrade path. If the bet goes wrong, only the renderer (SW-38) is rewritten; the component-map architecture holds under either library.

**Revisit if.** TanStack Markdown stops being maintained or can't render something a post needs.

**Tickets.** SW-36, SW-38
