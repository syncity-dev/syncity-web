import { defineConfig } from "@pandacss/dev";
import { breakpoints } from "@/theme/breakpoints";
import { shadows } from "@/theme/tokens/shadows";
import { fonts } from "@/theme/tokens/fonts";
import { globalCss } from "@/theme/global-css";
import { zIndex } from "@/theme/tokens/z-index";
import { keyframes } from "@/theme/keyframes";
import { colors } from "@/theme/semantic-tokens/colors";
import { animations } from "@/theme/tokens/animations";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/constants/**/*.{ts,tsx,js,jsx}",
    "./src/recipes/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/styled-system/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints,
      tokens: {
        fonts,
        shadows,
        zIndex,
        animations,
      },
      semanticTokens: {
        colors,
      },
    },
    keyframes,
  },

  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
  globalCss,
});
