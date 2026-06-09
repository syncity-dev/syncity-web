import type { LayerConfig } from '@/components/features/HomePage/Hero/components/IsoDeco/IsoDeco.types';

export const LAYER_FADE_MS = 650;
export const LAYER_STAGGER_MS = 300;
export const STACK_MS = 700;

export const LINE_DRAW_MS = 400;
export const CIRCLE_FADE_MS = 300;
export const ELEMENT_GAP_MS = 120;
// LINE_LENGTH = |y2 - y1| = |-60 - (-96)| = 36px
export const LINE_LENGTH = 36;

// Ordered bottom (i=0) to top (i=3) — SVG renders last element on top
export const LAYER_CONFIGS: LayerConfig[] = [
  { i: 0, spreadY: 60, finalY: 30, hoverDy: 20 },
  { i: 1, spreadY: 20, finalY: 10, hoverDy: 7 },
  { i: 2, spreadY: -20, finalY: -10, hoverDy: -7 },
  { i: 3, spreadY: -60, finalY: -30, hoverDy: -20 },
];

export const TOP_LAYER = LAYER_CONFIGS[LAYER_CONFIGS.length - 1];

export const FADE_TOTAL_MS = LAYER_STAGGER_MS * (LAYER_CONFIGS.length - 1) + LAYER_FADE_MS;

export const HEADER_START_MS = FADE_TOTAL_MS + STACK_MS;
export const OUTER_CIRCLE_DELAY_MS = HEADER_START_MS + LINE_DRAW_MS + ELEMENT_GAP_MS;
export const INNER_CIRCLE_DELAY_MS = OUTER_CIRCLE_DELAY_MS + CIRCLE_FADE_MS + ELEMENT_GAP_MS;
export const TOTAL_ENTRY_MS = INNER_CIRCLE_DELAY_MS + CIRCLE_FADE_MS;

export const KEYFRAMES_CSS = `@media (prefers-reduced-motion: no-preference) {
  @keyframes iso-fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes iso-line-reveal {
    from { transform: scaleY(0); }
    to   { transform: scaleY(1); }
  }
}`;
