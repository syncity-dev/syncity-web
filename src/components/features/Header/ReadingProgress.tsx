import { css } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';

const Outline = styled('svg', {
  base: {
    // Sits on the header's 1px border
    position: 'absolute',
    inset: '-1px',
    w: 'calc(100% + 2px)',
    h: 'calc(100% + 2px)',
    overflow: 'visible',
    pointerEvents: 'none',
    display: { base: 'block', md: 'none' },
  },
});

// A class on a plain <rect>: styled() would treat the rect's `x` and `y` as style props.
const strokeClass = css({
  width: 'calc(100% - 2px)',
  height: 'calc(100% - 2px)',
  rx: 'token(radii.l4)',
  fill: 'none',
  stroke: 'accent.default',
  strokeWidth: '2px',
  strokeDasharray: '1',
  // Empty until the post timeline drives it, so pages without a post show nothing.
  strokeDashoffset: '1',
  // Without scroll-driven animation support the animation would play instantly and show a
  // full outline, so it only applies where the browser supports it.
  '@supports (animation-timeline: view())': {
    animationName: 'draw-stroke',
    animationTimingFunction: 'linear',
    animationFillMode: 'both',
    // `--post-body` is the article on a post page (PostPage). `contain` runs from the
    // article's top reaching the top of the screen to its end reaching the bottom.
    animationTimeline: '--post-body',
    animationRange: 'contain',
  },
});

/**
 * Reading progress on phones: an accent outline that draws around the floating header
 * as the post is read, done entirely in CSS with a scroll-driven animation.
 */
export const ReadingProgress = () => (
  <Outline aria-hidden="true">
    <rect x={1} y={1} pathLength={1} className={strokeClass} />
  </Outline>
);
