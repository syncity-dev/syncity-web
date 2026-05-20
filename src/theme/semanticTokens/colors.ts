import { defineSemanticTokens } from '@pandacss/dev';

export const colors = defineSemanticTokens.colors({
  bg: {
    default: { value: { _light: '{colors.gray.1}', _dark: '{colors.gray.1}' } },
    subtle: { value: { _light: '{colors.gray.2}', _dark: '{colors.gray.3}' } },
    muted: { value: { _light: '{colors.gray.3}', _dark: '{colors.gray.4}' } },
  },
  fg: {
    default: { value: '{colors.gray.12}' },
    muted: { value: '{colors.gray.11}' },
    subtle: { value: '{colors.gray.10}' },
  },
  border: {
    default: { value: '{colors.gray.4}' },
    strong: { value: '{colors.gray.8}' },
  },
  accent: {
    default: { value: '{colors.blue.9}' },
    emphasis: { value: '{colors.blue.10}' },
    muted: { value: '{colors.blue.3}' },
    fg: { value: '{colors.white}' },
  },
  danger: {
    default: { value: '{colors.red.9}' },
    emphasis: { value: '{colors.red.10}' },
    muted: { value: '{colors.red.3}' },
    fg: { value: '{colors.red.11}' },
  },
  success: {
    default: { value: '{colors.green.9}' },
    emphasis: { value: '{colors.green.10}' },
    muted: { value: '{colors.green.3}' },
    fg: { value: '{colors.green.11}' },
  },
  warning: {
    default: { value: '{colors.amber.9}' },
    emphasis: { value: '{colors.amber.10}' },
    muted: { value: '{colors.amber.3}' },
    fg: { value: '{colors.amber.11}' },
  },
  info: {
    default: { value: '{colors.sky.9}' },
    emphasis: { value: '{colors.sky.10}' },
    muted: { value: '{colors.sky.3}' },
    fg: { value: '{colors.sky.11}' },
  },
});
