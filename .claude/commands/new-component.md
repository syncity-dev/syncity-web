# New Core Atom Component

Create a new core atom component named: $ARGUMENTS

## Rules

Read CLAUDE.md before starting. Follow these conventions exactly.

### File structure

Create `src/components/core/$ARGUMENTS/` with:
- `$ARGUMENTS.tsx` — the React component

If the component has visual variants, also create `src/recipes/$ARGUMENTS.ts` and register it in `panda.config.ts`. Run `pnpm prepare` after.

### Recipe choice

- **Single element, visual variants** → `defineRecipe()` in `src/recipes/$ARGUMENTS.ts`, registered under `recipes` in `panda.config.ts`
- **Compound component with slot context** (like Card) → `defineSlotRecipe()` in `src/recipes/$ARGUMENTS.ts`, registered under `slotRecipes` in `panda.config.ts`; use `createStyleContext` from `@/styled-system/jsx` in the component file

### Component conventions

- Props type: extend `HTMLStyledProps<'element'>` from `@/styled-system/jsx`
- Size prop type: use `Size` from `@/types/core` (`'sm' | 'md' | 'lg'`)
- Color variants: use `colorPalette` prop on the root + `colorPalette.*` tokens in the recipe
- Named export only (no default exports)
- No inline `style={{}}` for anything covered by design tokens

### Token rules (enforced — no exceptions)

- Colors → semantic tokens (`accent.default`, `fg.muted`, `bg.subtle`, etc.) or palette sub-tokens via `colorPalette`
- Surfaces → `layerStyle` prop (`surfaceRaised`, `surfaceElevated`, etc.)
- Typography → `fontFamily: "body"` or `fontFamily: "heading"`, `textStyle` prop
- Shadows → `shadow` token (`xs` through `2xl`, `inset`, `top`)
- Radii → `rounded: "l1"` / `"l2"` / `"l3"` / `"full"`
- Animations → `animation` token or `_motionSafe` / `_motionReduce` conditions
- Interactive transitions → import `interactiveTransition` from `@/theme/motion/transitions`

### Accessibility

- Add `_focusVisible` ring using `outlineColor: "accent.default"` and `outlineOffset: "2px"`
- For icon-only components, document that callers must provide `aria-label`
- If the component wraps a native interactive element, forward `ref` if useful

### After creating

Show the file tree of what was created and a minimal usage example.
