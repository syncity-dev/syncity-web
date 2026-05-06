import { defineConfig } from "@pandacss/dev";
import { breakpoints } from "@/theme/breakpoints";
import { conditions } from "@/theme/conditions";
import { globalCss } from "@/theme/global-css";
import { keyframes } from "@/theme/keyframes";
import { layerStyles } from "@/theme/layer-styles";
import { textStyles } from "@/theme/text-styles";
import { colorPalettes, blue, red, green, amber, sky } from "@/theme/colors";
import {
  animations,
  colors as colorPrimitives,
  durations,
  easings as easingPrimitives,
  fonts,
  shadows as shadowPrimitives,
  zIndex,
} from "@/theme/tokens";
import { colors, easings, radii, shadows } from "@/theme/semanticTokens";
import { slotRecipes } from "@/recipes";

export default defineConfig({
  preflight: true,

  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/constants/**/*.{ts,tsx,js,jsx}",
    "./src/recipes/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],

  exclude: [],

  conditions: {
    extend: conditions,
  },

  theme: {
    extend: {
      breakpoints,
      tokens: {
        colors: colorPrimitives,
        fonts,
        durations,
        easings: easingPrimitives,
        shadows: shadowPrimitives,
        zIndex,
        animations,
      },
      semanticTokens: {
        colors: {
          ...colorPalettes,
          ...colors,
          accent: { ...blue, ...colors.accent },
          danger: { ...red, ...colors.danger },
          success: { ...green, ...colors.success },
          warning: { ...amber, ...colors.warning },
          info: { ...sky, ...colors.info },
        },
        shadows,
        radii,
        easings,
      },
      layerStyles,
      textStyles,
      slotRecipes,
    },
    keyframes,
  },

  staticCss: {
    css: [
      {
        properties: {
          colorPalette: [
            "blue",
            "accent",
            "red",
            "danger",
            "slate",
            "gray",
            "amber",
            "warning",
            "green",
            "success",
            "sky",
            "info",
          ],
        },
      },
    ],
  },

  jsxFramework: "react",

  outdir: "src/styled-system",
  globalCss,
});
