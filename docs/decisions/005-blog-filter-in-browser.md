# 005 · Filter and paginate the blog index in the browser, via search params

**Status.** Accepted

**Date.** 2026-10-07

**Decision.** `/blog` stays a single prerendered page that carries the metadata of every published post (title, date, author, tags, description: a few KB even at 100 posts). Filtering and paging happen client-side, with state in typed TanStack Router search params: `/blog?tag=frontend&page=2`. Unknown tags and out-of-range pages fall back to `/blog`. Post pages stay fully prerendered. Topics come from frontmatter `tags`, which should be restricted to a fixed list in the post schema so a typo cannot create a topic. The filter appears from roughly eight posts across two or more topics; pagination once a list passes ten posts.

**Why.** The blog will eventually need a topic filter and pagination. The site is fully prerendered and hosted on GitHub Pages, which serves only the files in `dist/client` and cannot render a page per request. A URL such as `/blog?tag=react` is therefore always the one prerendered `/blog` page; any per-request behaviour has to run in the browser.

**Alternatives rejected.** Prerendering one path per state (`/blog/tag/$tag`, `/blog/page/$page` and their combinations): every view becomes indexable, but the route count grows with topics × pages for a blog expected to stay small. Moving to a host with a server (Nitro on Node, Vercel, Netlify, Cloudflare) to render filtered views on request: only worth it if content must change without a deploy, and every push to `main` already rebuilds the site.

**Consequences.** Filtered and paged views are not separate indexed pages; the accepted cost is that search engines index the posts, not topic listings. Moving to a server host later would let the same search params render server-side without changing the URLs. The Dockerfile in the repository is stale (it copies a Next.js `.next/standalone` build) and must be rewritten before any such move.

**Revisit if.** The archive reaches several hundred posts, because the index page then carries too much data. Or the site moves to a host that renders pages on request (SW-43).

**Tickets.** SW-36 (follow-up from the blog design's "Growth" row, no ticket of its own yet)
