# New Homepage Section

Create a new homepage section named: $ARGUMENTS

## Steps

### 1. Read context first (always, before writing any code)

- Read `~/Workspace/syncity-assistant/resources/syncity-web/implementation-status.md` — confirm this section is next and check for relevant key decisions.
- Read the section spec in `~/Workspace/syncity-assistant/resources/syncity-web/handoff/06-sections.md` — find the matching section heading.
- Read `~/Workspace/syncity-assistant/resources/syncity-web/handoff/design-reference/syncity-app-v3.jsx` — extract the exact copy, SVG glyphs, and JSX structure for this section.
- Check what atoms are available in `src/components/core/` — do not create atoms the ticket says already exist.

### 2. Implement

Create `src/components/features/HomePage/$ARGUMENTS/` with:
- `$ARGUMENTS.tsx` — the main section component
- Sub-components in the same directory if the section has repeated items (e.g., `$ARGUMENTSCard.tsx`)

#### Section conventions

- Root element: `<Section>` from `@/components/core/Section/Section`
- Section padding: `py={{ base: '16', md: '20' }}` unless the spec says otherwise
- Section header pattern: 2-col grid on `md`+ (Eyebrow + h2 left, intro paragraph right), collapses to 1 on mobile
- `<Eyebrow>` for the label above the heading, `<Heading as="h2">` for the section title
- Italic accent phrase in headings: use `<em className={css({ fontFamily: 'heading', fontStyle: 'italic', fontWeight: 'inherit', color: 'accent.default' })}>`
- Hairline grid layout (borders between cells, not gaps): implement directly with `styled('div')` + `borderTop` on container, `borderRight` between cells on desktop, `borderBottom` between cells on mobile — the `<HairlineGrid>` atom in core is the Hero background grid, not a layout primitive
- Static data: put arrays in `src/constants/` if they'll be reused; keep inline for one-off section data

#### Token rules (no exceptions)

- Colors → semantic tokens (`accent.default`, `fg.muted`, `bg.subtle`, etc.) or `colorPalette.*`
- Never hardcode hex values, raw px shadows, raw font families
- Surfaces → `layerStyle` prop (`surfaceRaised`, `surfaceElevated`, etc.)
- Responsive → always define `base` + at least `md` breakpoint values
- SVG attributes can't use Panda token refs — use `var(--colors-*)` CSS variables directly

#### Button / interactive elements (post SW-29)

- Use `variant` not `visual` on `<Button>`
- Variants: `solid / surface / subtle / outline / plain`
- Use `<LinkButton>` for anchor buttons (not `<Button href="...">`)
- `inverted` variant is gone — handle FinalCTA surface inversion via section-level styling

#### Accessibility

- Add `id` to the `<Section>` matching the nav anchor (e.g., `id="work"`)
- `aria-hidden="true"` on decorative SVGs and duplicates
- `_motionReduce` fallback on any animated elements
- Heading hierarchy: h2 for section title, h3 and below inside sections

### 3. Wire up

Import the section in `src/components/features/HomePage/Home.tsx` and add it in the correct position per the v3 page order:

```
Hero → Principles → Team → Process → Stack → Contact → FinalCTA → Footer
```

### 4. Type-check

```bash
npx tsc --noEmit 2>&1 | grep -v "style-context.tsx" | grep -v "is not assignable to type 'Props'"
```

Must be clean before committing.

### 5. Commit and PR

- Commit: `feat(section-name): implement <Section Name> section`
- Open / update PR using the team template (Description · Jira Ticket · Type of Change · Checklist)
- Jira ticket link: `https://syncity.atlassian.net/browse/<TICKET-ID>`

### 6. Update implementation status

Edit `~/Workspace/syncity-assistant/resources/syncity-web/implementation-status.md`:
- Mark this section ✅ with the PR number
- Mark the next section as "Next"
- Bump the "Last updated" date
- Add any new key decisions (API surprises, token workarounds, component gotchas)

### After creating

Show:
1. The file tree of what was created
2. The updated `Home.tsx` showing where the section was inserted
