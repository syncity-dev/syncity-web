import type { MarkdownComponentProps, MarkdownComponents } from '@tanstack/markdown/react';
import { Image } from '@unpic/react';

import { Heading } from '@/components/core/Heading/Heading';
import { Link } from '@/components/core/Link/Link';
import { Text } from '@/components/core/Text/Text';
import { css } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';

/*
 * Maps the elements `@tanstack/markdown` emits onto core atoms. Where no atom
 * exists (lists, tables, code) the wrapper is a thin `styled()` element built
 * only from tokens. Typography for headings, paragraphs and links stays owned
 * by their recipes, so posts restyle with the rest of the site.
 */

const List = {
  base: {
    ps: '6',
    '& > li + li': { mt: '2' },
    '& li > ul, & li > ol': { mt: '2' },
  },
} as const;

const UnorderedList = styled('ul', { base: { ...List.base, listStyleType: 'disc' } });

const OrderedList = styled('ol', { base: { ...List.base, listStyleType: 'decimal' } });

const ListItem = styled('li', {
  base: {
    textStyle: 'lg',
    color: 'fg.default',
    ps: '1',
    _marker: { color: 'fg.subtle' },
    '& > p + p': { mt: '3' },
  },
});

const Blockquote = styled('blockquote', {
  base: {
    borderInlineStartWidth: 'medium',
    borderColor: 'accent.default',
    ps: '5',
    color: 'fg.muted',
    '& > * + *': { mt: '4' },
    '& p, & li': { color: 'fg.muted' },
  },
});

const InlineCode = styled('code', {
  base: {
    fontFamily: 'mono',
    fontSize: '0.875em',
    bg: 'bg.muted',
    color: 'fg.default',
    px: '1.5',
    py: '0.5',
    rounded: 'l1',
  },
});

const BlockCode = styled('code', {
  base: {
    fontFamily: 'mono',
    display: 'block',
    minWidth: 'max-content',
  },
});

/** Token classes emitted by `@tanstack/highlight`, mapped onto `syntax.*`. */
const CodeBlock = styled('pre', {
  base: {
    layerStyle: 'surfaceRaised',
    rounded: 'l3',
    p: '4',
    overflowX: 'auto',
    fontFamily: 'mono',
    textStyle: 'sm',
    color: 'fg.default',
    _focusVisible: {
      outline: '2px solid',
      outlineColor: 'accent.default',
      outlineOffset: '2px',
    },
    '& .th-line': { display: 'inline-block', minWidth: 'full' },
    '& .th-line--highlighted': { bg: 'syntax.highlight' },
    '& .th-comment': { color: 'syntax.comment', fontStyle: 'italic' },
    '& .th-keyword, & .th-selector': { color: 'syntax.keyword' },
    '& .th-string, & .th-code-inline': { color: 'syntax.string' },
    '& .th-number, & .th-literal': { color: 'syntax.number' },
    '& .th-function, & .th-command': { color: 'syntax.function' },
    '& .th-type': { color: 'syntax.type' },
    '& .th-property, & .th-attr, & .th-variable': { color: 'syntax.property' },
    '& .th-tag': { color: 'syntax.tag' },
    '& .th-operator, & .th-meta': { color: 'syntax.punctuation' },
    '& .th-heading': { color: 'syntax.function', fontWeight: 'bold' },
    '& .th-link': { color: 'syntax.function', textDecoration: 'underline' },
    '& .th-inserted': { color: 'syntax.inserted.fg', bg: 'syntax.inserted.bg' },
    '& .th-deleted': { color: 'syntax.deleted.fg', bg: 'syntax.deleted.bg' },
  },
});

const TableScroll = styled('div', {
  base: {
    overflowX: 'auto',
    rounded: 'l3',
    borderWidth: 'thin',
    borderColor: 'border.default',
    _focusVisible: {
      outline: '2px solid',
      outlineColor: 'accent.default',
      outlineOffset: '2px',
    },
  },
});

const Table = styled('table', {
  base: {
    width: 'full',
    borderCollapse: 'collapse',
    textStyle: 'md',
    '& th, & td': {
      px: '4',
      py: '2',
      borderBottomWidth: 'thin',
      borderColor: 'border.default',
    },
    '& th': { fontWeight: 'semibold', bg: 'bg.subtle', textAlign: 'start' },
    '& tbody tr:last-child td': { borderBottomWidth: '0' },
  },
});

const ThematicBreak = styled('hr', {
  base: { borderColor: 'border.default' },
});

const FootnoteRef = styled('sup', {
  base: { fontSize: 'xs', lineHeight: '0', ms: '0.5' },
});

const Footnotes = styled('section', {
  base: {
    pt: '6',
    borderTopWidth: 'thin',
    borderColor: 'border.default',
    '& li, & p': { textStyle: 'sm', color: 'fg.muted' },
  },
});

const imageClass = css({ rounded: 'l3' });

const VisuallyHiddenHeading = styled('h2', { base: { srOnly: true } });

const BLOCK_CODE_CLASS = /^language-/;

const Code = ({ className, ...props }: MarkdownComponentProps<'code'>) =>
  className && BLOCK_CODE_CLASS.test(className) ? (
    <BlockCode className={className} {...props} />
  ) : (
    <InlineCode {...props} />
  );

const Pre = ({ className: _libraryClass, ...props }: MarkdownComponentProps<'pre'>) => (
  // Focusable so keyboard users can scroll code that overflows horizontally.
  <CodeBlock tabIndex={0} {...props} />
);

const MarkdownTable = (props: MarkdownComponentProps<'table'>) => (
  <TableScroll role="region" aria-label="Table" tabIndex={0}>
    <Table {...props} />
  </TableScroll>
);

const MarkdownImage = ({ src, alt, title }: MarkdownComponentProps<'img'>) =>
  src ? (
    // Self-hosted images match no unpic CDN, so unpic passes props through
    // untransformed — set lazy loading explicitly rather than relying on it.
    <Image
      src={src}
      alt={alt ?? ''}
      title={title}
      layout="fullWidth"
      loading="lazy"
      decoding="async"
      className={imageClass}
    />
  ) : null;

/** The footnotes label is visually hidden by the library via `.sr-only`. */
const H2 = ({ className, ...props }: MarkdownComponentProps<'h2'>) =>
  className === 'sr-only' ? <VisuallyHiddenHeading {...props} /> : <Heading as="h2" {...props} />;

const MarkdownSection = (props: MarkdownComponentProps<'section'>) =>
  'data-footnotes' in props ? <Footnotes {...props} /> : <section {...props} />;

export const markdownComponents: MarkdownComponents = {
  h1: (props) => <Heading as="h1" {...props} />,
  h2: H2,
  h3: (props) => <Heading as="h3" {...props} />,
  h4: (props) => <Heading as="h4" {...props} />,
  p: (props) => <Text textStyle="lg" color="fg.default" {...props} />,
  a: (props) => <Link {...props} />,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  blockquote: Blockquote,
  code: Code,
  pre: Pre,
  img: MarkdownImage,
  table: MarkdownTable,
  hr: ThematicBreak,
  sup: FootnoteRef,
  section: MarkdownSection,
};
