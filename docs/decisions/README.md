# Decisions

Why syncity-web is built the way it is. Each decision has its own file: what we decided, the reasoning, what was rejected, what it costs or requires, and what would make us look at it again.

## When to add one

Add a decision when it is expensive to reverse, constrains future work, or would otherwise be argued again by the next person who reads the code:

- committing to a framework, renderer or library, especially an unstable one
- a rendering, data-flow or build-pipeline architecture
- a risk the team accepted on purpose, and why it was judged acceptable
- rejecting a plausible alternative, and what made it lose

Don't log routine implementation choices (file layout, naming, which atom a component composes from, a token pick); those are readable from the code.

## How

1. Create `NNN-short-name.md` with the next free number, in the format below.
2. Add a row to the table at the end of this file.
3. If two pull requests pick the same number, the one merged second renames its file before merging.

Decisions are never deleted. When one is replaced, set its status to `Superseded by NNN` and link the new one.

```
# NNN · The decision in one line

**Status.** Accepted

**Date.** YYYY-MM-DD

**Decision.** What we do.

**Why.** The reasoning.

**Alternatives rejected.** What else was considered, and why it lost.

**Consequences.** What the decision costs, or what has to stay true because of it.

**Revisit if.** What would make this worth reopening.

**Tickets.** SW-…
```

Consequences is optional: leave it out when a decision has no cost or rule worth naming.

## All decisions

| #                                             | Decision                                                                  | Date       | Status   |
| --------------------------------------------- | ------------------------------------------------------------------------- | ---------- | -------- |
| [001](001-tanstack-markdown.md)               | Render markdown with `@tanstack/markdown`, accepting its alpha status     | 2026-09-25 | Accepted |
| [002](002-vitest.md)                          | Vitest as the project's test runner                                       | 2026-09-25 | Accepted |
| [003](003-tanstack-markdown-1-0-pin.md)       | Pin `@tanstack/markdown` and `@tanstack/highlight` at 1.0.0               | 2026-10-07 | Accepted |
| [004](004-posts-in-static-server-function.md) | Parse posts in a static server function, not directly in the loader       | 2026-10-07 | Accepted |
| [005](005-blog-filter-in-browser.md)          | Filter and paginate the blog index in the browser, via search params      | 2026-10-07 | Accepted |
| [006](006-build-without-node-env.md)          | Production builds must run with `NODE_ENV` unset or `production`          | 2026-10-09 | Accepted |
| [007](007-drafts-on-develop.md)               | Show drafts on the develop deploy, and keep it out of search              | 2026-10-10 | Accepted |
| [008](008-dependabot-to-develop.md)           | Dependabot updates go to `develop` and merge by themselves once CI passes | 2026-10-24 | Accepted |
| [009](009-post-share-cards.md)                | Draw a share card for every post at build time with satori and resvg      | 2026-10-28 | Accepted |
| [010](010-vite-site-url.md)                   | Each deploy sets its own site address with `VITE_SITE_URL`                | 2026-11-21 | Accepted |
