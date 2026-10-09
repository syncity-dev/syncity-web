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
 * Runs on the server and in the browser with the same settings, so both produce the
 * same markup. A code block in a language not listed here shows as plain uncolored
 * text: add the language before a post uses it.
 *
 * The highlighter only adds class names (`th-keyword`, `th-string`, …). Their colors
 * are set in src/theme/global-css.ts from the `syntax.*` tokens, so code switches
 * color with light and dark mode.
 */
const highlighter = createHighlighter({
  languages: [css, diff, html, js, json, jsx, markdown, shell, ts, tsx, yaml],
});

export const highlightCode = createTanStackMarkdownHighlighter(highlighter);
