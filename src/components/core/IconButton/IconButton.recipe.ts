import { cva } from '@/styled-system/css';
import { interactiveTransition } from '@/theme/motion/transitions';

export const iconButton = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    rounded: 'l4',
    bg: 'transparent',
    color: 'fg.muted',
    borderWidth: 'thin',
    borderStyle: 'solid',
    borderColor: 'border.strong',
    ...interactiveTransition,
    outlineOffset: '1',
    _focusVisible: {
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineColor: 'accent.default',
    },
    _hover: {
      bg: 'bg.subtle',
      color: 'fg.default',
    },
    _disabled: {
      opacity: 0.5,
      pointerEvents: 'none',
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: { w: '9', h: '9', _icon: { boxSize: '4' } },
      md: { w: '10', h: '10', _icon: { boxSize: '4.5' } },
      lg: { w: '11', h: '11', _icon: { boxSize: '5' } },
      xl: { w: '12', h: '12', _icon: { boxSize: '5.5' } },
    },
  },
});
