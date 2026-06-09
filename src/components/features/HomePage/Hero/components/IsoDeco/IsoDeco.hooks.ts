import { useEffect, useState } from 'react';

import {
  FADE_TOTAL_MS,
  TOTAL_ENTRY_MS,
} from '@/components/features/HomePage/Hero/components/IsoDeco/IsoDeco.constants';
import type { Phase } from '@/components/features/HomePage/Hero/components/IsoDeco/IsoDeco.types';

export const useIsoDecoAnimation = () => {
  const [phase, setPhase] = useState<Phase>('fade');
  const [hovered, setHovered] = useState(false);
  const [reduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    if (reduced) {
      const t = setTimeout(() => setPhase('done'), 0);

      return () => clearTimeout(t);
    }
    const t1 = setTimeout(() => setPhase('stack'), FADE_TOTAL_MS);
    const t2 = setTimeout(() => setPhase('done'), TOTAL_ENTRY_MS);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [reduced]);

  const onMouseEnter = () => {
    if (phase === 'done') setHovered(true);
  };
  const onMouseLeave = () => setHovered(false);

  return { phase, hovered, reduced, onMouseEnter, onMouseLeave };
};
