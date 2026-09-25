---
title: Example Post
description: A format reference for the blog content pipeline. Kept as a draft so it never ships.
publishedAt: 2026-09-25
draft: true
author: Syncity Team
tags:
  - meta
---

This file documents the frontmatter contract enforced by `src/utils/posts.ts`.

`title`, `description`, and `publishedAt` are required. `publishedAt` is an ISO date
(`YYYY-MM-DD`), quoted or unquoted. `draft` defaults to `false`.
`author` is optional and defaults to `Syncity Team`; it must be that or the name of a
team member in `src/constants/team.ts`. `ogImage` and `tags` are optional.

The filename becomes the slug, so it must be lowercase words separated by single
hyphens — this file would be served at `/blog/example-post`.
