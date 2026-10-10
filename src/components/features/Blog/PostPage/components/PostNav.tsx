import { Link } from '@tanstack/react-router';

import { Eyebrow } from '@/components/core/Eyebrow/Eyebrow';
import { HairlineGrid } from '@/components/core/HairlineGrid/HairlineGrid';
import { cva, cx } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import { focusRing } from '@/theme/focus';
import { interactiveTransition, textTransition } from '@/theme/motion/transitions';
import type { PostSummary } from '@/utils/posts';

type PostNavProps = {
  older?: PostSummary;
  newer?: PostSummary;
};

// A class instead of `styled(Link)`, which loses the route types that check `params`.
const cell = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2',
    py: '8',
    px: '4',
    bg: 'bg.default',
    color: 'inherit',
    textDecoration: 'none',
    ...interactiveTransition,
    _hover: { bg: 'gray.surface.bg.hover' },
    // Inset so the ring isn't hidden by the neighbouring cell.
    _focusVisible: { ...focusRing, outlineOffset: '-2px' },
  },
  variants: {
    align: {
      start: {},
      end: { textAlign: { sm: 'end' }, alignItems: { sm: 'flex-end' } },
    },
  },
});

const CellTitle = styled('span', {
  base: {
    fontFamily: 'heading',
    fontWeight: 'bold',
    textStyle: '2xl',
    ...textTransition,
    _groupHover: { color: 'accent.default' },
  },
});

/** Links to the next older post (or the newer one, on the oldest post) and back to the list. */
export const PostNav = ({ older, newer }: PostNavProps) => {
  const sibling = older ?? newer;

  return (
    <HairlineGrid
      as="nav"
      aria-label="More posts"
      mt="20"
      gridTemplateColumns={{ base: '1fr', sm: sibling ? 'repeat(2, minmax(0, 1fr))' : '1fr' }}
    >
      {sibling && (
        <Link
          to="/blog/$slug"
          params={{ slug: sibling.slug }}
          className={cx('group', cell({ align: 'start' }))}
        >
          <Eyebrow>{older ? 'Older' : 'Newer'}</Eyebrow>
          <CellTitle>{sibling.title}</CellTitle>
        </Link>
      )}
      <Link to="/blog" className={cx('group', cell({ align: sibling ? 'end' : 'start' }))}>
        <Eyebrow>The blog</Eyebrow>
        <CellTitle>All posts</CellTitle>
      </Link>
    </HairlineGrid>
  );
};
