import type { ReactNode } from 'react';
import { useState } from 'react';

import { useInView } from '@/hooks/useInView';

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
}

export const SectionReveal = ({ children, delay = 0 }: SectionRevealProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [reduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  return (
    <div
      ref={ref}
      style={
        inView
          ? reduced
            ? undefined
            : {
                animation: `section-reveal 700ms var(--easings-enter) ${delay}ms both`,
              }
          : { opacity: 0, visibility: 'hidden' }
      }
    >
      {children}
    </div>
  );
};
