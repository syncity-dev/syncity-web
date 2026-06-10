import { css } from '@/styled-system/css';

export const Caption = () => (
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
);
