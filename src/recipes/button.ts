import { defineRecipe } from '@pandacss/dev';

import { interactiveTransition } from '@/theme/motion/transitions';

export const button = defineRecipe({
  className: 'button',
  jsx: ['Button', 'IconButton', 'LinkButton', 'CloseButton', 'ButtonGroup'],
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    isolation: 'isolate',
    fontFamily: 'body',
    fontWeight: 'medium',
    lineHeight: '1',
    cursor: 'pointer',
    rounded: 'l4',
    gap: '2',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    appearance: 'none',
    verticalAlign: 'middle',
    outline: '0',
    flexShrink: '0',
    ...interactiveTransition,
    _icon: {
      flexShrink: '0',
    },
    _disabled: {
      layerStyle: 'disabled',
    },
    _focusVisible: {
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineColor: 'accent.default',
      outlineOffset: '2px',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
  variants: {
    variant: {
      solid: {
        bg: 'colorPalette.solid.bg',
        color: 'colorPalette.solid.fg',
        _hover: {
          bg: 'colorPalette.solid.bg.hover',
        },
      },
      surface: {
        bg: 'colorPalette.surface.bg',
        borderWidth: '1px',
        borderColor: 'colorPalette.surface.border',
        color: 'colorPalette.surface.fg',
        _hover: {
          borderColor: 'colorPalette.surface.border.hover',
        },
        _active: {
          bg: 'colorPalette.surface.bg.active',
        },
        _on: {
          bg: 'colorPalette.surface.bg.active',
        },
      },
      subtle: {
        bg: 'colorPalette.subtle.bg',
        color: 'colorPalette.subtle.fg',
        _hover: {
          bg: 'colorPalette.subtle.bg.hover',
        },
        _active: {
          bg: 'colorPalette.subtle.bg.active',
        },
        _on: {
          bg: 'colorPalette.subtle.bg.active',
        },
      },
      outline: {
        borderWidth: '1px',
        borderColor: 'colorPalette.outline.border',
        color: 'colorPalette.outline.fg',
        _hover: {
          bg: 'colorPalette.outline.bg.hover',
        },
        _active: {
          bg: 'colorPalette.outline.bg.active',
        },
        _on: {
          bg: 'colorPalette.outline.bg.active',
        },
      },
      plain: {
        color: 'colorPalette.plain.fg',
        _hover: {
          bg: 'colorPalette.plain.bg.hover',
        },
        _active: {
          bg: 'colorPalette.plain.bg.active',
        },
        _on: {
          bg: 'colorPalette.plain.bg.active',
        },
      },
    },
    size: {
      '2xs': { h: '6', minW: '6', textStyle: 'xs', px: '2', _icon: { boxSize: '3.5' } },
      xs: { h: '8', minW: '8', textStyle: 'sm', px: '2.5', _icon: { boxSize: '4' } },
      sm: { h: '9', minW: '9', textStyle: 'sm', px: '3', _icon: { boxSize: '4' } },
      md: { h: '10', minW: '10', textStyle: 'sm', px: '3.5', _icon: { boxSize: '5' } },
      lg: { h: '11', minW: '11', textStyle: 'md', px: '4', _icon: { boxSize: '5' } },
      xl: { h: '12', minW: '12', textStyle: 'md', px: '4.5', _icon: { boxSize: '5.5' } },
      '2xl': { h: '16', minW: '16', textStyle: 'xl', px: '6', _icon: { boxSize: '6' } },
    },
  },
});
