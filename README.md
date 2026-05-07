# Syncity Web

The official website for [syncity.dev](https://syncity.dev) — a team of
independent consultants focused on long-term projects.

## Stack

- **Framework** — [TanStack Start](https://tanstack.com/start) with
  [TanStack Router](https://tanstack.com/router)
- **Styling** — [Panda CSS](https://panda-css.com) with a custom design system
  (semantic color tokens, slot recipes)
- **Components** — [Ark UI](https://ark-ui.com) for headless primitives
- **Images** — [@unpic/react](https://unpic.pics) for optimized image handling
- **Forms** — [React Hook Form](https://react-hook-form.com) +
  [Zod](https://zod.dev)
- **Fonts** — Roboto + Roboto Condensed via
  [@fontsource](https://fontsource.org)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command      | Description                  |
| ------------ | ---------------------------- |
| `pnpm dev`   | Start the development server |
| `pnpm build` | Build for production         |
| `pnpm start` | Start the production server  |
| `pnpm lint`  | Run ESLint                   |

## Project Structure

```
src/
├── app/              # Route files and global styles
├── components/
│   ├── core/         # Design system components (Button, Card, Badge, …)
│   ├── features/     # Page-specific feature components
│   └── shared/       # Layout components (Header, Footer, NotFound, …)
├── recipes/          # Panda CSS slot recipes
├── theme/            # Design tokens (colors, shadows, typography, …)
└── utils/            # Shared utilities (seo, …)
public/
├── logos/            # Logo and favicon assets (light/dark variants)
└── favicon.svg       # Adaptive SVG favicon (light/dark via prefers-color-scheme)
```
