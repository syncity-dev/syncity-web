import { useEffect, useState } from 'react';

import { FADE_TOTAL_MS, TOTAL_ENTRY_MS } from './IsoDeco.constants';
import type { Phase } from './IsoDeco.types';

export const useIsoDecoAnimation = () => {
  const [phase, setPhase] = useState<Phase>('fade');
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t1 = setTimeout(() => setPhase('stack'), reduced ? 0 : FADE_TOTAL_MS);
    const t2 = setTimeout(() => setPhase('done'), reduced ? 0 : TOTAL_ENTRY_MS);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const onMouseEnter = () => {
    if (phase === 'done') setHovered(true);
  };
  const onMouseLeave = () => setHovered(false);

  return { phase, hovered, onMouseEnter, onMouseLeave };
};
