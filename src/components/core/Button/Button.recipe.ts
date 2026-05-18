import { cva } from '@/styled-system/css';
import { interactiveTransition } from '@/theme/motion/transitions';

export const button = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'body',
    fontWeight: 'bold',
    cursor: 'pointer',
    rounded: 'l4',
    borderWidth: 'thin',
    ...interactiveTransition,
    outlineOffset: '1',
    outlineColor: 'colorPalette.solid.bg',
  },
  defaultVariants: {
    visual: 'solid',
    size: 'md',
  },
  variants: {
    visual: {
      solid: {
        shadow: 'md',
        bg: 'colorPalette.solid.bg',
        borderColor: 'colorPalette.solid.bg',
        color: 'colorPalette.solid.fg',
        _hover: {
          bg: 'colorPalette.solid.bg.hover',
          borderColor: 'colorPalette.solid.bg.hover',
        },
      },
      outline: {
        bg: 'transparent',
        borderColor: 'colorPalette.outline.border',
        color: 'colorPalette.outline.fg',
        _hover: {
          bg: 'colorPalette.outline.bg.hover',
        },
      },
      link: {
        border: 'none',
        bg: 'transparent',
        color: 'colorPalette.plain.fg',
        shadow: 'none',
        _hover: {
          bg: 'colorPalette.plain.bg.hover',
          shadow: 'none',
        },
      },
      surface: {
        bg: 'bg.subtle',
        borderColor: 'border.strong',
        color: 'fg.default',
        _hover: {
          bg: 'bg.muted',
        },
      },
      inverted: {
        shadow: 'md',
        bg: 'bg.default',
        borderColor: 'bg.default',
        color: 'fg.default',
        _hover: {
          bg: 'bg.subtle',
          borderColor: 'bg.subtle',
        },
      },
    },
    size: {
      '2xs': {
        h: '6',
        minW: '6',
        textStyle: 'xs',
        px: '2',
        _icon: { boxSize: '3.5' },
      },
      xs: {
        h: '8',
        minW: '8',
        textStyle: 'sm',
        px: '2.5',
        _icon: { boxSize: '4' },
      },
      sm: {
        h: '9',
        minW: '9',
        textStyle: 'sm',
        px: '3',
        _icon: { boxSize: '4' },
      },
      md: {
        h: '10',
        minW: '10',
        textStyle: 'sm',
        px: '3.5',
        _icon: { boxSize: '5' },
      },
      lg: {
        h: '11',
        minW: '11',
        textStyle: 'md',
        px: '4',
        _icon: { boxSize: '5' },
      },
      xl: {
        h: '12',
        minW: '12',
        textStyle: 'md',
        px: '4.5',
        _icon: { boxSize: '5.5' },
      },
      '2xl': {
        h: '16',
        minW: '16',
        textStyle: 'xl',
        px: '6',
        _icon: { boxSize: '6' },
      },
    },
  },
});
