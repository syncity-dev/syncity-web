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
    text: { value: '{colors.blue.11}' },
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
  /**
   * Syntax highlighting for `@tanstack/highlight` token classes. Built on the
   * Radix 11-steps (high-contrast text) so every hue resolves per color mode.
   */
  syntax: {
    comment: { value: '{colors.gray.10}' },
    keyword: { value: '{colors.red.11}' },
    string: { value: '{colors.green.11}' },
    number: { value: '{colors.sky.11}' },
    function: { value: '{colors.blue.11}' },
    type: { value: '{colors.amber.11}' },
    property: { value: '{colors.sky.11}' },
    tag: { value: '{colors.green.11}' },
    punctuation: { value: '{colors.gray.11}' },
    inserted: {
      fg: { value: '{colors.green.11}' },
      bg: { value: '{colors.green.a3}' },
    },
    deleted: {
      fg: { value: '{colors.red.11}' },
      bg: { value: '{colors.red.a3}' },
    },
    highlight: { value: '{colors.blue.a3}' },
  },
});
