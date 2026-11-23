# 008 · Dependabot updates go to `develop` and merge by themselves once CI passes

**Status.** Accepted

**Date.** 2026-10-24

**Decision.** Dependabot targets `develop`, so updates reach the test site first and go live with the next release to `main`. A `ci` workflow builds, type checks, lints and tests every PR to `develop` and `main`. A ruleset on `develop` requires that check, so patch and minor updates merge by themselves only after it passes. Major updates still get the "needs manual review" label and wait for a person.

**Why.** `develop` deploys to Netlify at develop.syncity.dev, the test site, and `main` deploys to GitHub Pages, the live site. Dependabot opens a batch of PRs every week. The auto-merge workflow ran `gh pr merge --auto`, which GitHub refuses on a branch without rules, so some PRs stayed open. No checks ran on PRs, so the ones that did merge were never built or tested before merging.

**Alternatives rejected.** Dependabot targeting `main`: updates would go live without passing through the test site. Removing `--auto` from the merge workflow: the error would stop, but updates would merge with no checks at all.

**Consequences.** A Dependabot PR that fails CI stays open until someone fixes or closes it. CI builds without repository secrets, because Dependabot PRs cannot read them. That works only while the `VITE_` variables keep fallback values in the code. "Require branches to be up to date" is off, so a Dependabot PR can merge on CI that ran before the previous update merged. Porting Estimum's merge job and rebase queue (estimum_frontend#518, SW-47) is the follow-up for that.

**Revisit if.** This repo becomes private. The ruleset then needs the org's GitHub Team plan.

**Tickets.** SW-46, SW-47
