import { createHighlighter } from '@tanstack/highlight/core';
import { css } from '@tanstack/highlight/languages/css';
import { diff } from '@tanstack/highlight/languages/diff';
import { html } from '@tanstack/highlight/languages/html';
import { js } from '@tanstack/highlight/languages/js';
import { json } from '@tanstack/highlight/languages/json';
import { jsx } from '@tanstack/highlight/languages/jsx';
import { markdown } from '@tanstack/highlight/languages/markdown';
import { shell } from '@tanstack/highlight/languages/shell';
import { ts } from '@tanstack/highlight/languages/ts';
import { tsx } from '@tanstack/highlight/languages/tsx';
import { yaml } from '@tanstack/highlight/languages/yaml';
import { createTanStackMarkdownHighlighter } from '@tanstack/highlight/markdown';

/**
 * Isomorphic on purpose: the same registrations run during SSR and hydration so
 * the highlighted markup matches. Fences in an unregistered language fall back
 * to escaped plaintext — register a language here before a post needs it.
 *
 * Highlighting emits class names only (`th-keyword`, `th-string`, …); colors
 * come from the `syntax.*` semantic tokens, so a color-mode toggle restyles
 * code blocks without re-rendering them.
 */
const highlighter = createHighlighter({
  languages: [css, diff, html, js, json, jsx, markdown, shell, ts, tsx, yaml],
});

export const highlightCode = createTanStackMarkdownHighlighter(highlighter);
