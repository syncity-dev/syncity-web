# Token Compliance Check

Audit the current working tree (or a specific file/directory if $ARGUMENTS is provided) for design token violations.

Target: $ARGUMENTS (if empty, check all staged + unstaged changes via `git diff`)

## What to check

Read CLAUDE.md first to understand the full token system. Then scan for these violations:

### 1. Hardcoded colors
Flag any hex values (`#rrggbb`, `#rgb`), `rgb()`, `rgba()`, or `hsl()` in component `.tsx` or recipe `.ts` files.

Exceptions (do NOT flag):
- Values inside `src/theme/` files (that IS where raw values live)
- Values inside `src/styled-system/` (auto-generated)
- `transparent`, `currentColor`, `inherit`

### 2. Hardcoded font families
Flag any `fontFamily` value that is a raw string like `'Arial'`, `sans-serif`, `'Saira'` directly.
Correct form: `fontFamily: "body"` or `fontFamily: "heading"`.

### 3. Hardcoded border radius
Flag raw values like `borderRadius: "4px"`, `rounded: "4px"` etc.
Correct form: `rounded: "l1"` / `"l2"` / `"l3"` / `"full"` or Panda scale values (`"sm"`, `"md"`, etc.).

### 4. Hardcoded shadows
Flag raw `boxShadow` strings not using a token reference.
Correct form: `shadow: "md"` (or `xs`, `sm`, `lg`, `xl`, `2xl`, `inset`, `top`).

### 5. Hardcoded z-index
Flag raw numeric z-index values in component files.
Correct form: `zIndex: "header"` / `"modal"` / `"overlay"` / `"dropdown"` / `"footer"`.

### 6. Missing motion-reduce fallback
Flag any `animation` prop or `_motionSafe` usage that has no corresponding `_motionReduce` fallback.

### 7. Inline style={{}}
Flag any `style={{}}` prop usage in component files for values that could be tokens.

### 8. Missing semantic token usage
Flag cases where a raw palette step is used directly in a component file where a semantic token exists.
Example: `color="slate.12"` should be `color="fg.default"`, `color="blue.9"` should be `color="accent.default"`.

## Output format

For each violation found:
- File path + line number
- The offending code
- What it should be replaced with

At the end, give a summary count by category. If no violations are found, confirm the code is token-compliant.
