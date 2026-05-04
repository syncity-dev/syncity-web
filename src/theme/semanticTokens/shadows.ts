import { defineSemanticTokens } from "@pandacss/dev";

export const shadows = defineSemanticTokens.shadows({
  xs: {
    value: {
      _light: "0px 1px 2px {colors.slate.a6}, 0px 0px 1px {colors.slate.a7}",
      _dark: "0px 1px 1px {colors.black.a8}, 0px 0px 1px inset {colors.slate.a8}",
    },
  },
  sm: {
    value: {
      _light: "0px 2px 4px {colors.slate.a4}, 0px 0px 1px {colors.slate.a4}",
      _dark: "0px 2px 4px {colors.black.a8}, 0px 0px 1px inset {colors.slate.a8}",
    },
  },
  md: {
    value: {
      _light: "0px 4px 8px {colors.slate.a4}, 0px 0px 1px {colors.slate.a4}",
      _dark: "0px 4px 8px {colors.black.a8}, 0px 0px 1px inset {colors.slate.a8}",
    },
  },
  lg: {
    value: {
      _light: "0px 8px 16px {colors.slate.a4}, 0px 0px 1px {colors.slate.a4}",
      _dark: "0px 8px 16px {colors.black.a8}, 0px 0px 1px inset {colors.slate.a8}",
    },
  },
  xl: {
    value: {
      _light: "0px 16px 24px {colors.slate.a4}, 0px 0px 1px {colors.slate.a4}",
      _dark: "0px 16px 24px {colors.black.a8}, 0px 0px 1px inset {colors.slate.a8}",
    },
  },
  "2xl": {
    value: {
      _light: "0px 24px 40px {colors.slate.a4}, 0px 0px 1px {colors.slate.a4}",
      _dark: "0px 24px 40px {colors.black.a8}, 0px 0px 1px inset {colors.slate.a8}",
    },
  },
  inset: {
    value: {
      _light: "inset 8px 0 12px -8px {colors.slate.a4}",
      _dark: "inset 8px 0 12px -8px {colors.black.a6}",
    },
  },
});
