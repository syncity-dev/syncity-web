import { useEffect, useState } from 'react';

import { useColorMode } from '@/hooks/useColorMode';
import { css } from '@/styled-system/css';
import { Box } from '@/styled-system/jsx';

const ENTRY_MS = 2500;
const FADE_MS = 1000;
const GAP_MS = 500;
const LAYER_DELAY_MS = FADE_MS + GAP_MS;

// startX: layers begin fanned out horizontally
// Ordered bottom (i=0) to top (i=3) — SVG renders last element on top
const LAYER_CONFIGS = [
  { i: 0, startX: 60, startY: 60, finalY: 30, hoverDy: 20 },
  { i: 1, startX: 44, startY: 20, finalY: 10, hoverDy: 7 },
  { i: 2, startX: 28, startY: -20, finalY: -10, hoverDy: -7 },
  { i: 3, startX: 12, startY: -60, finalY: -30, hoverDy: -20 },
];

// Phase 1 (0–60%): spring on X — fan out → overshoot → settle at X=0
// Phase 2 (65–100%): vertical close on Y into final positions
function buildKeyframes(): string {
  return LAYER_CONFIGS.map(({ i, startX, startY, finalY }) => {
    const overshootX = -startX;

    return `
      @keyframes iso-layer-${i} {
        0%   { transform: translate(${startX}px, ${startY}px); animation-timing-function: var(--easings-exit); }
        45%  { transform: translate(${overshootX}px, ${startY}px); animation-timing-function: var(--easings-snappy); }
        60%  { transform: translate(0px, ${startY}px); animation-timing-function: var(--easings-snappy); }
        65%  { transform: translate(0px, ${startY}px); animation-timing-function: var(--easings-snappy); }
        100% { transform: translate(0px, ${finalY}px); animation-timing-function: var(--easings-snappy); }
      }`;
  }).join('\n');
}

const TOP_LAYER = LAYER_CONFIGS[LAYER_CONFIGS.length - 1];
const HEADER_OFFSET = TOP_LAYER.startY - TOP_LAYER.finalY; // -30

const HEADER_KEYFRAME = `
  @keyframes iso-header {
    0%   { transform: translateY(${HEADER_OFFSET}px); }
    65%  { transform: translateY(${HEADER_OFFSET}px); }
    100% { transform: translateY(0px); }
  }`;

// Shadow fill transitions during Y-close phase (layers physically stacking)
const FILL_KEYFRAME = `
  [data-color-mode="light"] { --iso-fill-start: 1; --iso-fill-end: 0; }
  [data-color-mode="dark"]  { --iso-fill-start: 0; --iso-fill-end: 1; }
  @keyframes iso-fill-layer {
    0%   { opacity: var(--iso-fill-start, 0); }
    65%  { opacity: var(--iso-fill-start, 0); }
    100% { opacity: var(--iso-fill-end, 1); }
  }`;

const FADE_KEYFRAME = `
  @keyframes iso-fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }`;

const KEYFRAMES_CSS = `${FILL_KEYFRAME}\n@media (prefers-reduced-motion: no-preference) {\n${buildKeyframes()}\n${HEADER_KEYFRAME}\n${FADE_KEYFRAME}\n}`;

export const IsoDeco = () => {
  const [entryDone, setEntryDone] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { resolved } = useColorMode();
  const overlayOpacity = resolved === 'light' ? 0 : 1;

  useEffect(() => {
    const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 0
      : ENTRY_MS + LAYER_DELAY_MS;
    const t = setTimeout(() => setEntryDone(true), delay);

    return () => clearTimeout(t);
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
        onMouseEnter={() => entryDone && setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={
          entryDone
            ? undefined
            : { animation: `iso-fade-in ${FADE_MS}ms var(--easings-enter) forwards` }
        }
      >
        <g
          style={
            entryDone
              ? {
                  transform: `translateY(${hovered ? TOP_LAYER.hoverDy : 0}px)`,
                  transition: 'transform 1s var(--easings-snappy)',
                }
              : {
                  animation: `iso-header ${ENTRY_MS}ms var(--easings-emphasized) ${LAYER_DELAY_MS}ms both`,
                }
          }
        >
          <circle cx="0" cy="-110" r="6" fill="var(--colors-accent-default)" />
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
          <circle
            cx="0"
            cy="-110"
            r="14"
            stroke="var(--colors-accent-default)"
            strokeOpacity="0.25"
            fill="none"
          />
          <line
            x1="0"
            y1="-96"
            x2="0"
            y2="-60"
            stroke="var(--colors-accent-default)"
            strokeOpacity="0.3"
            strokeDasharray="2 3"
          />
        </g>
        {LAYER_CONFIGS.map(({ i, finalY, hoverDy }) => {
          const isTop = i === 3;
          const layerStyle: React.CSSProperties = entryDone
            ? {
                transform: `translate(0px, ${finalY + (hovered ? hoverDy : 0)}px)`,
                transition: 'transform 0.5s var(--easings-snappy)',
              }
            : {
                animation: `iso-layer-${i} ${ENTRY_MS}ms linear ${LAYER_DELAY_MS}ms both`,
              };

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
                  style={
                    entryDone
                      ? { opacity: overlayOpacity }
                      : {
                          animation: `iso-fill-layer ${ENTRY_MS}ms var(--easings-emphasized) ${LAYER_DELAY_MS}ms both`,
                        }
                  }
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
