import { defineSlotRecipe } from '@pandacss/dev';

export const card = defineSlotRecipe({
  className: 'card',
  slots: ['root', 'header', 'body', 'footer', 'title', 'description'],
  base: {
    root: {
      borderRadius: 'l4',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1',
    },
    body: {
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
    },
    footer: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '3',
    },
    title: {
      textStyle: 'lg',
      fontWeight: 'semibold',
    },
    description: {
      color: 'fg.muted',
      textStyle: 'sm',
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'md',
  },
  variants: {
    size: {
      sm: {
        header: { p: '4' },
        body: { px: '4', pb: '4' },
        footer: { px: '4', pb: '4', pt: '1.5' },
      },
      md: {
        header: { p: '6' },
        body: { px: '6', pb: '6' },
        footer: { px: '6', pb: '6', pt: '2' },
      },
      lg: {
        header: { p: '8' },
        body: { px: '8', pb: '8' },
        footer: { px: '8', pb: '8', pt: '3' },
      },
    },
    variant: {
      elevated: {
        root: {
          layerStyle: 'surfaceElevated',
        },
      },
      outline: {
        root: {
          layerStyle: 'surfaceRaised',
        },
      },
      subtle: {
        root: {
          layerStyle: 'surfaceSubtle',
        },
      },
    },
  },
});
