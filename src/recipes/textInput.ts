import { defineSlotRecipe } from '@pandacss/dev';

export const textInput = defineSlotRecipe({
  className: 'text-input',
  slots: ['control'],
  base: {
    control: {
      accentColor: 'fg.default',
      borderWidth: '1px',
      borderColor: 'border.default',
      bgColor: 'bg.default',
      color: 'fg.default',
      rounded: 'l4',
      _placeholder: {
        color: 'fg.subtle',
      },
      _focusVisible: {
        outlineWidth: '2px',
        outlineStyle: 'solid',
        outlineColor: 'accent.default',
        outlineOffset: '2px',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: {
        control: { paddingInline: '2', paddingBlock: '2', fontSize: 'sm' },
      },
      md: {
        control: { paddingInline: '3', paddingBlock: '4', fontSize: 'md' },
      },
      lg: {
        control: { paddingInline: '4', paddingBlock: '5', fontSize: 'lg' },
      },
    },
  },
});
