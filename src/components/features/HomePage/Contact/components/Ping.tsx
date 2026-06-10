import { css } from '@/styled-system/css';
import { Grid } from '@/styled-system/jsx';

export const Ping = () => (
  <Grid gridTemplateColumns="1fr">
    <span
      aria-hidden="true"
      className={css({
        display: 'inline-block',
        w: '2',
        h: '2',
        rounded: 'full',
        bg: 'success.default',
        flexShrink: 0,
        animation: 'ping',
        gridColumn: '1',
        gridRow: '1',
        _motionReduce: { animation: 'none' },
      })}
    />
    <Dot />
  </Grid>
);

const Dot = () => (
  <span
    aria-hidden="true"
    className={css({
      display: 'inline-block',
      w: '2',
      h: '2',
      rounded: 'full',
      bg: 'success.default',
      gridColumn: '1',
      gridRow: '1',
    })}
  />
);
