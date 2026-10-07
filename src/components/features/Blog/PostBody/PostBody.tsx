import type { MarkdownDocument } from '@tanstack/markdown';
import { Markdown } from '@tanstack/markdown/react';

import { styled } from '@/styled-system/jsx';
import { highlightCode } from '@/utils/highlight';

import { markdownComponents } from './markdownComponents';

type PostBodyProps = {
  /** A pre-parsed AST from `getPostDocument` — never raw markdown. */
  document: MarkdownDocument;
};

const Prose = styled('div', {
  base: {
    maxWidth: '3xl',
    // All vertical rhythm lives here, so atoms in the map stay margin-free.
    '& > * + *': { mt: '6' },
    '& > h2:not(:first-child)': { mt: '14' },
    '& > h3:not(:first-child)': { mt: '10' },
    '& > h4:not(:first-child)': { mt: '8' },
    '& > hr': { my: '10' },
    '& > section[data-footnotes]': { mt: '16' },
  },
});

export const PostBody = ({ document }: PostBodyProps) => (
  <Prose>
    <Markdown components={markdownComponents} highlighter={highlightCode}>
      {document}
    </Markdown>
  </Prose>
);
