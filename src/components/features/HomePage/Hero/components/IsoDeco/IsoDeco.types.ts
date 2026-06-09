export type Phase = 'fade' | 'stack' | 'done';

export interface LayerConfig {
  i: number;
  spreadY: number;
  finalY: number;
  hoverDy: number;
}
