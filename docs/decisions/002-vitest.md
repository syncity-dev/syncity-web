# 002 · Vitest as the project's test runner

**Status.** Accepted

**Date.** 2026-09-25

**Decision.** Vitest, as a devDependency, with a `vitest.config.ts` carrying the `@` alias and a node environment. Tests are co-located as `*.test.ts` beside the code.

**Why.** SW-37 requires unit tests for the blog content pipeline, and the repo had no test infrastructure at all: no runner, no config, no `test` script. Satisfying the ticket meant choosing one, so this sets the testing approach for the whole project rather than for one subtask.

**Alternatives rejected.** Jest. It needs its own transform pipeline and ESM configuration to match a Vite + TypeScript project, and it does not understand `import.meta.glob`. That last point is not cosmetic: the content pipeline is built on that glob, and under Vitest the tests exercise the real wiring against `src/content/posts` instead of only in-memory fixtures.

**Consequences.** Test-runner tooling is settled for everything that follows; later suites should extend this setup rather than introduce a second runner. A DOM environment and a component-testing library are deliberately not set up yet. Add them when the first component test needs them, not before.

**Revisit if.** Not applicable. Every test since has extended this setup.

**Tickets.** SW-37
