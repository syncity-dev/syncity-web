import { defineSemanticTokens } from "@pandacss/dev";

export const colors = defineSemanticTokens.colors({
  bg: {
    default: { value: { _light: "{colors.white}", _dark: "{colors.slate.1}" } },
    subtle: {
      value: { _light: "{colors.slate.2}", _dark: "{colors.slate.2}" },
    },
    muted: { value: { _light: "{colors.slate.3}", _dark: "{colors.slate.3}" } },
  },
  fg: {
    default: {
      value: { _light: "{colors.slate.12}", _dark: "{colors.slate.12}" },
    },
    muted: {
      value: { _light: "{colors.slate.11}", _dark: "{colors.slate.11}" },
    },
    subtle: {
      value: { _light: "{colors.slate.10}", _dark: "{colors.slate.10}" },
    },
  },
  border: {
    default: {
      value: { _light: "{colors.slate.2}", _dark: "{colors.slate.2}" },
    },
    strong: {
      value: { _light: "{colors.slate.8}", _dark: "{colors.slate.8}" },
    },
  },
  accent: {
    default: { value: { _light: "{colors.blue.9}", _dark: "{colors.blue.9}" } },
    emphasis: {
      value: { _light: "{colors.blue.10}", _dark: "{colors.blue.10}" },
    },
    muted: { value: { _light: "{colors.blue.3}", _dark: "{colors.blue.3}" } },
    fg: { value: { _light: "{colors.white}", _dark: "{colors.white}" } },
  },
  danger: {
    default: { value: { _light: "{colors.red.9}", _dark: "{colors.red.9}" } },
    emphasis: {
      value: { _light: "{colors.red.10}", _dark: "{colors.red.10}" },
    },
    muted: { value: { _light: "{colors.red.3}", _dark: "{colors.red.3}" } },
    fg: { value: { _light: "{colors.red.11}", _dark: "{colors.red.11}" } },
  },
  success: {
    default: {
      value: { _light: "{colors.green.9}", _dark: "{colors.green.9}" },
    },
    emphasis: {
      value: { _light: "{colors.green.10}", _dark: "{colors.green.10}" },
    },
    muted: { value: { _light: "{colors.green.3}", _dark: "{colors.green.3}" } },
    fg: { value: { _light: "{colors.green.11}", _dark: "{colors.green.11}" } },
  },
  warning: {
    default: {
      value: { _light: "{colors.amber.9}", _dark: "{colors.amber.9}" },
    },
    emphasis: {
      value: { _light: "{colors.amber.10}", _dark: "{colors.amber.10}" },
    },
    muted: {
      value: { _light: "{colors.amber.3}", _dark: "{colors.amber.3}" },
    },
    fg: { value: { _light: "{colors.amber.11}", _dark: "{colors.amber.11}" } },
  },
  info: {
    default: { value: { _light: "{colors.sky.9}", _dark: "{colors.sky.9}" } },
    emphasis: {
      value: { _light: "{colors.sky.10}", _dark: "{colors.sky.10}" },
    },
    muted: { value: { _light: "{colors.sky.3}", _dark: "{colors.sky.3}" } },
    fg: { value: { _light: "{colors.sky.11}", _dark: "{colors.sky.11}" } },
  },
});
