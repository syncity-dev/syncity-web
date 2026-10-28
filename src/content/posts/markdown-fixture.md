---
# MOCK POST: remove before pushing to production.
# PostBody.test.tsx reads this file; move it next to the test before deleting it here.
title: Markdown Fixture
description: Exercises every markdown node the blog renderer supports. Kept as a draft so it never ships.
publishedAt: 2026-10-07
draft: true
author: Syncity Team
tags:
  - meta
---

# Heading one

Post bodies should start at `##` — the post title is the page's `h1`. This heading
exists only to exercise the `h1` mapping.

Inline formatting: **strong**, _emphasis_, ~~strikethrough~~, `inline code`, and a
[link with a title](https://syncity.dev 'Syncity'). A footnote reference[^1] and a
named one[^named].

## Lists

A tight list, nested three levels and mixing list types:

- First item
- Second item
  - Nested item
  - Nested item with `code`
    1. Deep ordered item
    2. Another deep ordered item
- Third item

A loose list, where items hold paragraphs:

1. First item, as a paragraph.

2. Second item, as a paragraph.

   With a second paragraph inside the same item.

### Table

| Left aligned | Centered | Right aligned |
| :----------- | :------: | ------------: |
| Panda CSS    | `atoms`  |            12 |
| Ark UI       |  slots   |             3 |

#### Code

```tsx
import { Heading } from '@/components/core/Heading/Heading';

// Renders a section title.
export const Title = ({ label }: { label: string }) => {
  const count: number = 42;
  return <Heading as="h2">{`${label} (${count})`}</Heading>;
};
```

```diff
- const color = '#1d4ed8';
+ const color = token('colors.accent.default');
```

```
A code block with no language shows as plain text.
```

## Image

![The Syncity logo](/logos/og-image.png 'Syncity')

## Blockquote

> A blockquote that contains a list:
>
> - Quoted item one
> - Quoted item two
>
> And a closing paragraph.

---

[^1]: A numbered footnote.

[^named]: A named footnote with `inline code`.
