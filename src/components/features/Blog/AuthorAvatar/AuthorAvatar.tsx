import { Image } from '@unpic/react';

import { css, cx } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';

type AuthorAvatarProps = {
  imgSrc?: string;
  size: 'sm' | 'lg';
};

// The photo's width and height attributes need the same sizes in px.
const photoPx = { sm: 24, lg: 48 } as const;

const MarkCircle = styled('span', {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    rounded: 'full',
    bg: 'gray.surface.bg',
    borderWidth: 'thin',
    borderColor: 'gray.surface.border',
    color: 'accent.default',
  },
  variants: {
    size: {
      sm: { boxSize: '6' },
      lg: { boxSize: '12' },
    },
  },
});

// A class instead of `styled(Image)`: styled would take `width` and `height` as style
// props and never pass them to the image.
const photoClass = css({ flexShrink: '0', rounded: 'full', objectFit: 'cover', bg: 'bg.muted' });
const photoSizeClass = { sm: css({ boxSize: '6' }), lg: css({ boxSize: '12' }) };

// The three strokes of the Syncity logo, the same shapes as public/favicon.svg.
const SyncityMark = () => (
  <svg viewBox="55 104 310 212" width="58%" fill="currentColor" aria-hidden="true">
    <path d="M249.507 109.449C250.443 108.121 251.967 107.332 253.592 107.332L309.618 107.332C311.244 107.332 312.19 109.169 311.246 110.493L167.995 311.403C167.057 312.719 165.54 313.5 163.924 313.5L111.289 313.5C108.857 313.5 107.436 310.758 108.838 308.77L249.507 109.449Z" />
    <path d="M297.909 180.005C300.163 176.863 303.793 175 307.66 175L356.799 175C360.039 175 361.935 178.65 360.072 181.3L283.032 290.903C273.295 304.756 257.423 313 240.49 313L208.344 313C205.901 313 204.483 310.236 205.907 308.251L297.909 180.005Z" />
    <path d="M121.591 240.709C119.337 243.851 115.707 245.714 111.84 245.714L62.7007 245.714C59.461 245.714 57.5652 242.065 59.4282 239.414L136.468 129.812C146.205 115.959 162.077 107.715 179.01 107.715L213.104 107.715C214.732 107.715 215.678 109.557 214.729 110.88L121.591 240.709Z" />
  </svg>
);

/** A team member's photo, or the Syncity mark for posts by the whole team. Decorative: the name is always shown next to it. */
export const AuthorAvatar = ({ imgSrc, size }: AuthorAvatarProps) =>
  imgSrc ? (
    <Image
      src={imgSrc}
      alt=""
      width={photoPx[size]}
      height={photoPx[size]}
      layout="fixed"
      className={cx(photoClass, photoSizeClass[size])}
    />
  ) : (
    <MarkCircle aria-hidden="true" size={size}>
      <SyncityMark />
    </MarkCircle>
  );
