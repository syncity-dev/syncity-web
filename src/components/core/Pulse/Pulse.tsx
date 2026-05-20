import { css } from '@/styled-system/css';

export const Pulse = () => (
  <span
    aria-hidden="true"
    className={css({
      display: 'inline-block',
      w: '2',
      h: '2',
      rounded: 'full',
      bg: 'success.default',
      flexShrink: 0,
      animation: 'pulse',
      _motionReduce: { animation: 'none' },
    })}
  />
);
