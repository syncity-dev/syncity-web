# 003 · Pin `@tanstack/markdown` and `@tanstack/highlight` at 1.0.0

**Status.** Accepted

**Date.** 2026-10-07

**Decision.** Proceed with TanStack Markdown, exact-pinned at `1.0.0` for both packages. This supersedes the alpha pin and the alpha risk accepted in [001](001-tanstack-markdown.md); the component-map architecture recorded there is unchanged. Highlighting uses Highlight's class-based output mapped onto new `syntax.*` semantic tokens, so code blocks follow the `data-color-mode` attribute through CSS variables with no re-render.

**Why.** [001](001-tanstack-markdown.md) accepted `@tanstack/markdown` `0.0.15` as an alpha dependency. Both packages shipped 1.0.0 before SW-38 started (markdown on 2026-10-01, highlight on 2026-09-30). SW-38's timeboxed spike rendered a fixture covering nested and tight lists, a loose list, an aligned table, numbered and named footnotes, inline and code blocks, an image, and a blockquote containing a list. Output was correct on 1.0.0, and the parsed AST round-trips through JSON unchanged.

**Alternatives rejected.** Staying on `0.0.15` as originally accepted: no benefit over a stable release of the same API. Highlight's bundled themes via `createThemeCss`: they hardcode hex colors and a `.dark` selector, bypassing the token system.

**Consequences.** The spike fallback (unified / remark) is not needed. Upgrades stay manual because of the exact pin. Code blocks in a language not registered in `src/utils/highlight.ts` render as escaped plaintext until it is added there.

**Revisit if.** Either package releases a new major version.

**Tickets.** SW-38
