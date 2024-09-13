import { defineConfig } from "@pandacss/dev";
import { fonts, shadows, breakpoints, zIndex } from "@/constants/theme";

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
      },
    },
  },

  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
