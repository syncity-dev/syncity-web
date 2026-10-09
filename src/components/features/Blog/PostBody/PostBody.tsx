import type { MarkdownDocument } from '@tanstack/markdown';
import { Markdown } from '@tanstack/markdown/react';

import { styled } from '@/styled-system/jsx';
import { highlightCode } from '@/utils/highlight';

import { markdownComponents } from './markdownComponents';

type PostBodyProps = {
  /** The post body as returned by `getPostDocument`, already parsed from markdown. */
  document: MarkdownDocument;
};

// Sets the text size and color for the whole post, and the space between blocks.
const Prose = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6',
    maxWidth: '3xl',
    textStyle: 'lg',
    color: 'fg.default',
  },
});

export const PostBody = ({ document }: PostBodyProps) => (
  <Prose>
    <Markdown components={markdownComponents} highlighter={highlightCode}>
      {document}
    </Markdown>
  </Prose>
);
