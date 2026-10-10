import type { MarkdownComponentProps, MarkdownComponents } from '@tanstack/markdown/react';
import { Image } from '@unpic/react';

import { Heading } from '@/components/core/Heading/Heading';
import { Link } from '@/components/core/Link/Link';
import { Text } from '@/components/core/Text/Text';
import { css } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import { focusRing } from '@/theme/focus';

// Which component renders each HTML element in a blog post. Headings, paragraphs and
// links reuse the site's core components; the rest are small styled elements.
// Font size and text color come from PostBody, so most elements here don't set them.

const List = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2',
  ps: '6',
  // A list inside a list item, e.g. a sub-list under a bullet
  'li > &': { mt: '2' },
} as const;

const UnorderedList = styled('ul', { base: { ...List, listStyleType: 'disc' } });

const OrderedList = styled('ol', { base: { ...List, listStyleType: 'decimal' } });

const ListItem = styled('li', {
  base: {
    ps: '1',
    _marker: { color: 'fg.subtle' },
    // A list item with several paragraphs
    '& > p + p': { mt: '3' },
  },
});

const Blockquote = styled('blockquote', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4',
    ps: '5',
    borderInlineStartWidth: 'medium',
    borderColor: 'accent.default',
    color: 'fg.muted',
  },
});

const InlineCode = styled('code', {
  base: {
    fontFamily: 'mono',
    fontSize: '0.875em',
    bg: 'bg.muted',
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

// Code colors are global classes, see `syntax` in src/theme/global-css.ts.
const CodeBlock = styled('pre', {
  base: {
    layerStyle: 'surfaceRaised',
    rounded: 'l3',
    p: '4',
    overflowX: 'auto',
    fontFamily: 'mono',
    textStyle: 'sm',
    // fg.default has one value for both modes, so it would keep the page's color here.
    // gray.12 has a dark value and switches with the block.
    color: 'gray.12',
    _focusVisible: focusRing,
  },
});

const TableScroll = styled('div', {
  base: {
    overflowX: 'auto',
    rounded: 'l3',
    borderWidth: 'thin',
    borderColor: 'border.default',
    _focusVisible: focusRing,
  },
});

const Table = styled('table', {
  base: { width: 'full', borderCollapse: 'collapse', textStyle: 'md' },
});

const TableHeaderCell = styled('th', {
  base: {
    px: '4',
    py: '2',
    fontWeight: 'semibold',
    textAlign: 'start',
    bg: 'bg.subtle',
    borderBottomWidth: 'thin',
    borderColor: 'border.default',
  },
});

// A top border on every cell draws the lines between rows and leaves the last row open.
const TableCell = styled('td', {
  base: { px: '4', py: '2', borderTopWidth: 'thin', borderColor: 'border.default' },
});

const ThematicBreak = styled('hr', {
  base: { my: '4', borderColor: 'border.default' },
});

const FootnoteRef = styled('sup', {
  base: { fontSize: 'xs', lineHeight: '0', ms: '0.5' },
});

const Footnotes = styled('section', {
  base: {
    mt: '10',
    pt: '6',
    borderTopWidth: 'thin',
    borderColor: 'border.default',
    textStyle: 'sm',
    color: 'fg.muted',
  },
});

const imageClass = css({ rounded: 'l3' });

const VisuallyHiddenHeading = styled('h2', { base: { srOnly: true } });

// Code blocks get a `language-*` class; inline code gets none.
const Code = ({ className, ...props }: MarkdownComponentProps<'code'>) =>
  className?.startsWith('language-') ? (
    <BlockCode className={className} {...props} />
  ) : (
    <InlineCode {...props} />
  );

// tabIndex lets keyboard users scroll code that is wider than the page.
// Code blocks are dark in both color modes: the attribute switches every color token inside to its dark value.
const Pre = ({ className: _libraryClass, ...props }: MarkdownComponentProps<'pre'>) => (
  <CodeBlock tabIndex={0} data-color-mode="dark" {...props} />
);

const MarkdownTable = (props: MarkdownComponentProps<'table'>) => (
  <TableScroll role="region" aria-label="Table" tabIndex={0}>
    <Table {...props} />
  </TableScroll>
);

// @unpic/react only resizes images from a known image CDN. Ours are served from the
// site itself, so it renders a plain <img>; set lazy loading ourselves.
const MarkdownImage = ({ src, alt, title }: MarkdownComponentProps<'img'>) =>
  src ? (
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

// The library renders a hidden "Footnotes" h2 with class `sr-only`; keep it hidden.
const H2 = ({ className, ...props }: MarkdownComponentProps<'h2'>) =>
  className === 'sr-only' ? (
    <VisuallyHiddenHeading {...props} />
  ) : (
    <Heading as="h2" mt="8" _first={{ mt: '0' }} {...props} />
  );

const MarkdownSection = (props: MarkdownComponentProps<'section'>) =>
  'data-footnotes' in props ? <Footnotes {...props} /> : <section {...props} />;

// Headings get extra space above them, on top of the gap PostBody sets between blocks.
export const markdownComponents: MarkdownComponents = {
  h1: (props) => <Heading as="h1" {...props} />,
  h2: H2,
  h3: (props) => <Heading as="h3" mt="4" _first={{ mt: '0' }} {...props} />,
  h4: (props) => <Heading as="h4" mt="2" _first={{ mt: '0' }} {...props} />,
  // Text defaults to 16px; inherit so paragraphs follow PostBody (18px) and footnotes (14px).
  p: (props) => <Text fontSize="inherit" {...props} />,
  a: (props) => <Link {...props} />,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  blockquote: Blockquote,
  code: Code,
  pre: Pre,
  img: MarkdownImage,
  table: MarkdownTable,
  th: TableHeaderCell,
  td: TableCell,
  hr: ThematicBreak,
  sup: FootnoteRef,
  section: MarkdownSection,
};
