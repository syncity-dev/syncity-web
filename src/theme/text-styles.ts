import { defineTextStyles } from '@pandacss/dev';

export const textStyles = defineTextStyles({
  xs: { value: { fontSize: 'xs', lineHeight: '1.125rem' } },
  sm: { value: { fontSize: 'sm', lineHeight: '1.25rem' } },
  md: { value: { fontSize: 'md', lineHeight: '1.5rem' } },
  lg: { value: { fontSize: 'lg', lineHeight: '1.75rem' } },
  xl: { value: { fontSize: 'xl', lineHeight: '1.875rem' } },
  '2xl': { value: { fontSize: '2xl', lineHeight: '2rem' } },
  '3xl': { value: { fontSize: '3xl', lineHeight: '2.375rem' } },
  '4xl': {
    value: { fontSize: '4xl', lineHeight: '2.75rem', letterSpacing: '-0.01em' },
  },
  '5xl': {
    value: { fontSize: '5xl', lineHeight: '3.75rem', letterSpacing: '-0.02em' },
  },
  '6xl': {
    value: { fontSize: '6xl', lineHeight: '4.5rem', letterSpacing: '-0.02em' },
  },
  '7xl': {
    value: { fontSize: '7xl', lineHeight: '5.75rem', letterSpacing: '-0.02em' },
  },
  label: {
    value: { fontSize: 'sm', lineHeight: '1.25rem', fontWeight: 'medium' },
  },
  eyebrow: {
    value: {
      fontSize: 'xs',
      lineHeight: '1rem',
      fontWeight: 'semibold',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
  },
  display: {
    value: {
      fontSize: { base: '6xl', md: '8xl', lg: '9xl' },
      lineHeight: '0.95',
      letterSpacing: '-0.01em',
      fontWeight: 'bold',
    },
  },
  sectionTitle: {
    value: {
      fontSize: { base: '4xl', md: '5xl', lg: '6xl' },
      lineHeight: '0.95',
      letterSpacing: '-0.02em',
      fontWeight: 'bold',
    },
  },
});
