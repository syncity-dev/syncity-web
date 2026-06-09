import {
  CIRCLE_FADE_MS,
  INNER_CIRCLE_DELAY_MS,
  OUTER_CIRCLE_DELAY_MS,
  TOP_LAYER,
} from '@/components/features/HomePage/Hero/components/IsoDeco/IsoDeco.constants';
import type { Phase } from '@/components/features/HomePage/Hero/components/IsoDeco/IsoDeco.types';
import { css } from '@/styled-system/css';

interface HeaderProps {
  phase: Phase;
  hovered: boolean;
}

export const Header = ({ phase, hovered }: HeaderProps) => (
  <g
    style={
      phase === 'done'
        ? {
            transform: `translateY(${hovered ? TOP_LAYER.hoverDy : 0}px)`,
            transition: 'transform 0.5s var(--easings-snappy)',
          }
        : undefined
    }
  >
    {/* 1. Dashed line draws bottom-to-top via growing clipPath rect */}
    <line
      x1="0"
      y1="-96"
      x2="0"
      y2="-60"
      stroke="var(--colors-accent-default)"
      strokeOpacity="0.3"
      strokeDasharray="2 3"
      clipPath={phase !== 'done' ? 'url(#iso-line-clip)' : undefined}
    />
    {/* 2. Outer ring fades in after line */}
    <circle
      cx="0"
      cy="-110"
      r="14"
      stroke="var(--colors-accent-default)"
      strokeOpacity="0.25"
      fill="none"
      style={{
        animation: `iso-fade-in ${CIRCLE_FADE_MS}ms var(--easings-enter) ${OUTER_CIRCLE_DELAY_MS}ms both`,
      }}
    />
    {/* 3. Inner solid dot fades in after outer ring */}
    <circle
      cx="0"
      cy="-110"
      r="6"
      fill="var(--colors-accent-default)"
      style={{
        animation: `iso-fade-in ${CIRCLE_FADE_MS}ms var(--easings-enter) ${INNER_CIRCLE_DELAY_MS}ms both`,
      }}
    />
    {/* 4. Ping mounts once inner dot is fully visible */}
    {phase === 'done' && (
      <circle
        cx="0"
        cy="-110"
        r="6"
        fill="var(--colors-accent-default)"
        className={css({
          transformBox: 'fill-box',
          transformOrigin: 'center',
          animation: 'ping',
          _motionReduce: { animation: 'none' },
        })}
      />
    )}
  </g>
);
