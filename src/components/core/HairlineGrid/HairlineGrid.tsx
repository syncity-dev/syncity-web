import { css } from '@/styled-system/css';

export const HairlineGrid = () => (
  <div
    aria-hidden="true"
    className={css({
      position: 'absolute',
      inset: 0,
      backgroundImage: [
        'linear-gradient(var(--colors-border-default) 1px, transparent 1px)',
        'linear-gradient(90deg, var(--colors-border-default) 1px, transparent 1px)',
      ].join(', '),
      backgroundSize: '56px 56px',
      maskImage: 'radial-gradient(ellipse 70% 60% at 50% 35%, #000 30%, transparent 80%)',
      WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 35%, #000 30%, transparent 80%)',
      pointerEvents: 'none',
      opacity: 0.7,
      _motionReduce: { opacity: 0 },
    })}
  />
);
