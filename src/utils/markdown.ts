import type { MarkdownDocument } from '@tanstack/markdown';
import { parseMarkdown } from '@tanstack/markdown';

export type { MarkdownDocument };

/**
 * Parses a post body into a serializable AST. Only call this from server code
 * (see `getPostDocument`) — rendering takes the AST, so the parser never needs
 * to reach the client bundle.
 */
export const parsePostMarkdown = (source: string): MarkdownDocument =>
  parseMarkdown(source, { headingIds: true });
