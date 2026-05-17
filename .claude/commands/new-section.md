# New Homepage Section

Create a new homepage section named: $ARGUMENTS

## Rules

Read CLAUDE.md before starting. Follow these conventions exactly.

### File structure

Create `src/components/features/HomePage/$ARGUMENTS/` with:
- `$ARGUMENTS.tsx` — the main section component
- Sub-components in the same directory if the section has repeated items (e.g., `$ARGUMENTSCard.tsx`, `$ARGUMENTSItem.tsx`)

### Section conventions

- Root element: `<Section>` from `@/components/core/Section/Section`
- Consistent section padding: check existing sections for the rhythm (`py="16"` is common)
- Section title: `<Heading as="h2">` — never skip the h2, it's required for accessibility and SEO heading hierarchy
- If the section has a short eyebrow label above the heading, use a `<Text>` with appropriate styling (or a dedicated `SectionLabel` atom if one exists)
- Data: static data arrays belong in `src/constants/` not inline in the component

### Token rules (enforced — no exceptions)

- Colors → semantic tokens only (`accent.default`, `fg.muted`, `bg.subtle`, etc.)
- Never hardcode hex values, raw px shadows, raw font families
- Surfaces → `layerStyle` prop for any card/panel elements
- Responsive → always define `base` + at least `md` breakpoint values

### Accessibility

- `<Section>` renders a `<section>` — add `aria-labelledby` pointing to the section's `<h2>` id if the section isn't otherwise labeled
- Decorative images: `alt=""` and `aria-hidden="true"`
- Animated/scrolling elements: use `_motionSafe` for the animation and `_motionReduce` for a static fallback

### Wiring up

After creating the section files:
1. Import the new section in `src/components/features/HomePage/Home.tsx`
2. Add it in the correct position in the JSX

### After creating

Show:
1. The file tree of what was created
2. The updated `Home.tsx` showing where the section was inserted
3. A note on any new core atoms that should be extracted if the section introduced a reusable pattern
