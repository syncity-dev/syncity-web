import { useEffect, useState } from 'react';

import { useColorMode } from '@/hooks/useColorMode';
import { css } from '@/styled-system/css';
import { Box } from '@/styled-system/jsx';

const LAYER_FADE_MS = 650;
const LAYER_STAGGER_MS = 300;
const STACK_MS = 700;

// Header element timings (all relative to mount)
const LINE_DRAW_MS = 400;
const CIRCLE_FADE_MS = 300;
const ELEMENT_GAP_MS = 120;
// LINE_LENGTH = |y2 - y1| = |-60 - (-96)| = 36px
const LINE_LENGTH = 36;

// Ordered bottom (i=0) to top (i=3) — SVG renders last element on top
const LAYER_CONFIGS = [
  { i: 0, spreadY: 60, finalY: 30, hoverDy: 20 },
  { i: 1, spreadY: 20, finalY: 10, hoverDy: 7 },
  { i: 2, spreadY: -20, finalY: -10, hoverDy: -7 },
  { i: 3, spreadY: -60, finalY: -30, hoverDy: -20 },
];

const TOP_LAYER = LAYER_CONFIGS[LAYER_CONFIGS.length - 1];

// ms from mount until the last layer's fade-in completes
const FADE_TOTAL_MS = LAYER_STAGGER_MS * (LAYER_CONFIGS.length - 1) + LAYER_FADE_MS;
// ms from mount when the header sequence begins (after stacking)
const HEADER_START_MS = FADE_TOTAL_MS + STACK_MS;
const OUTER_CIRCLE_DELAY_MS = HEADER_START_MS + LINE_DRAW_MS + ELEMENT_GAP_MS;
const INNER_CIRCLE_DELAY_MS = OUTER_CIRCLE_DELAY_MS + CIRCLE_FADE_MS + ELEMENT_GAP_MS;
// 'done' fires when inner dot is fully visible
const TOTAL_ENTRY_MS = INNER_CIRCLE_DELAY_MS + CIRCLE_FADE_MS;

type Phase = 'fade' | 'stack' | 'done';

const KEYFRAMES_CSS = `@media (prefers-reduced-motion: no-preference) {
  @keyframes iso-fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes iso-line-reveal {
    from { y: -60px; height: 0px; }
    to   { y: -96px; height: ${LINE_LENGTH}px; }
  }
}`;

export const IsoDeco = () => {
  const [phase, setPhase] = useState<Phase>('fade');
  const [hovered, setHovered] = useState(false);
  const { resolved } = useColorMode();
  const overlayOpacity = resolved === 'light' ? 0 : 1;

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t1 = setTimeout(() => setPhase('stack'), reduced ? 0 : FADE_TOTAL_MS);
    const t2 = setTimeout(() => setPhase('done'), reduced ? 0 : TOTAL_ENTRY_MS);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <Box
      aria-hidden="true"
      position="absolute"
      right="6"
      top="10"
      display={{ base: 'none', xl: 'flex' }}
      flexDir="column"
      alignItems="center"
    >
      <style>{KEYFRAMES_CSS}</style>
      <svg
        width="240"
        height="290"
        viewBox="-100 -130 200 280"
        fill="none"
        overflow="visible"
        onMouseEnter={() => phase === 'done' && setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <defs>
          {/* Clip rect grows from 0 to LINE_LENGTH, revealing dashes top-to-bottom */}
          <clipPath id="iso-line-clip">
            <rect
              x="-2"
              y="-60"
              width="4"
              height="0"
              style={{
                animation: `iso-line-reveal ${LINE_DRAW_MS}ms linear ${HEADER_START_MS}ms both`,
              }}
            />
          </clipPath>
        </defs>

        {/* Header: elements animate in sequence after stacking */}
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
          {/* 1. Dashed line draws top-to-bottom via growing clipPath rect */}
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

        {LAYER_CONFIGS.map(({ i, spreadY, finalY, hoverDy }) => {
          const isTop = i === 3;

          let layerStyle: React.CSSProperties;
          if (phase === 'done') {
            layerStyle = {
              transform: `translate(0px, ${finalY + (hovered ? hoverDy : 0)}px)`,
              transition: 'transform 0.5s var(--easings-snappy)',
            };
          } else if (phase === 'stack') {
            layerStyle = {
              transform: `translate(0px, ${finalY}px)`,
              transition: `transform ${STACK_MS}ms var(--easings-snappy)`,
            };
          } else {
            layerStyle = {
              transform: `translate(0px, ${spreadY}px)`,
              animation: `iso-fade-in ${LAYER_FADE_MS}ms var(--easings-enter) ${i * LAYER_STAGGER_MS}ms both`,
            };
          }

          return (
            <g key={i} style={layerStyle}>
              <path
                d="M-70 -5 L0 30 L0 50 L-70 15 Z"
                fill="var(--colors-bg-default)"
                stroke="var(--colors-border-strong)"
                strokeWidth="1"
              />
              <path
                d="M0 30 L70 -5 L70 15 L0 50 Z"
                fill="var(--colors-bg-subtle)"
                stroke="var(--colors-border-strong)"
                strokeWidth="1"
              />
              <path
                d="M0 -40 L70 -5 L0 30 L-70 -5 Z"
                fill="var(--colors-bg-muted)"
                stroke="var(--colors-border-strong)"
                strokeWidth="1"
              />
              {!isTop && (
                <path
                  d="M0 -40 L70 -5 L0 30 L-70 -5 Z"
                  fill="var(--colors-bg-default)"
                  style={{ opacity: overlayOpacity }}
                />
              )}
            </g>
          );
        })}
      </svg>
      <span
        className={css({
          textTransform: 'uppercase',
          color: 'fg.subtle',
          fontSize: 'xs',
          letterSpacing: '0.2em',
          textAlign: 'center',
          pointerEvents: 'none',
        })}
      >
        FIG.01 / Codebase that <br /> compounds
      </span>
    </Box>
  );
};
