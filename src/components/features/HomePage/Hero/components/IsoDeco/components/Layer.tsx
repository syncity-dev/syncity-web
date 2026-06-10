import { useColorMode } from '@/hooks/useColorMode';

interface LayerProps extends React.ComponentProps<'g'> {
  isTop: boolean;
}

export const Layer = ({ isTop, ...props }: LayerProps) => {
  const { resolved } = useColorMode();
  const overlayOpacity = resolved === 'light' ? 0 : 1;

  return (
    <g {...props}>
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
        fill="var(--colors-bg-muted)"
        stroke="var(--colors-border-strong)"
        strokeWidth="1"
      />
      {!isTop && (
        <path
          d="M0 -40 L70 -5 L0 30 L-70 -5 Z"
          fill="var(--colors-bg-default)"
          style={{ opacity: overlayOpacity }}
        />
      )}
    </g>
  );
};
