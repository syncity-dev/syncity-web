import { css } from '@/styled-system/css';
import { Box } from '@/styled-system/jsx';

export const IsoDeco = () => (
  <Box
    aria-hidden="true"
    position="absolute"
    right="-4"
    top="10"
    display={{ base: 'none', xl: 'flex' }}
    flexDir="column"
    alignItems="center"
    gap="3"
    pointerEvents="none"
  >
    <svg width="240" height="290" viewBox="-100 -130 200 280" fill="none">
      <circle cx="0" cy="-110" r="6" fill="var(--colors-accent-default)" />
      <circle
        cx="0"
        cy="-110"
        r="14"
        stroke="var(--colors-accent-default)"
        strokeOpacity="0.25"
        fill="none"
      />
      <line
        x1="0"
        y1="-96"
        x2="0"
        y2="-60"
        stroke="var(--colors-accent-default)"
        strokeOpacity="0.3"
        strokeDasharray="2 3"
      />
      {[0, 1, 2, 3].map((i) => {
        const isTop = i === 3;

        return (
          <g key={i} transform={`translate(0 ${30 - i * 20})`}>
            <path
              d="M-70 -5 L0 30 L0 50 L-70 15 Z"
              fill="var(--colors-bg-default)"
              stroke="var(--colors-border-strong)"
              strokeWidth="1"
            />
            <path
              d="M0 30 L70 -5 L70 15 L0 50 Z"
              fill="var(--colors-bg-subtle)"
              stroke="var(--colors-border-strong)"
              strokeWidth="1"
            />
            <path
              d="M0 -40 L70 -5 L0 30 L-70 -5 Z"
              fill={isTop ? 'var(--colors-bg-muted)' : 'var(--colors-bg-default)'}
              stroke="var(--colors-border-strong)"
              strokeWidth="1"
            />
          </g>
        );
      })}
    </svg>
    <span
      className={css({
        textTransform: 'uppercase',
        color: 'fg.subtle',
        fontSize: '2xs',
        letterSpacing: '0.2em',
        textAlign: 'center',
      })}
    >
      FIG.01 / Codebase that <br /> compounds
    </span>
  </Box>
);
