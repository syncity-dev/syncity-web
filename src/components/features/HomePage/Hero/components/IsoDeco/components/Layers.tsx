import type { CSSProperties } from 'react';

import { Layer } from '@/components/features/HomePage/Hero/components/IsoDeco/components/Layer';
import type { Phase } from '@/components/features/HomePage/Hero/components/IsoDeco/IsoDeco.types';

import { LAYER_CONFIGS, LAYER_FADE_MS, LAYER_STAGGER_MS, STACK_MS } from '../IsoDeco.constants';

export const Layers = ({ phase, hovered }: { phase: Phase; hovered: boolean }) => {
  return LAYER_CONFIGS.map(({ i, spreadY, finalY, hoverDy }) => {
    const isTop = i === LAYER_CONFIGS.length - 1;

    let layerStyle: CSSProperties;
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

    return <Layer key={i} isTop={isTop} style={layerStyle} />;
  });
};
