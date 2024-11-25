import { defineConfig, defineGlobalStyles } from "@pandacss/dev";
// import { breakpoints } from "@/theme/breakpoints";
// import { shadows } from "@/theme/tokens/shadows";
// import { fonts } from "@/theme/tokens/fonts";
// import { globalCss } from "@/theme/global-css";
// import { zIndex } from "@/theme/tokens/z-index";
// import { keyframes } from "@/theme/keyframes";
// import { colors } from "@/theme/semantic-tokens/colors";
// import { animations } from "@/theme/tokens/animations";

export const globalCss = defineGlobalStyles({
  ":root": {
    "--ease":
      "linear(0 0%,0.0036 9.62%,0.0185 16.66%,0.0489 23.03%,0.0962 28.86%,0.1705 34.93%,0.269 40.66%,0.3867 45.89%,0.5833 52.95%,0.683 57.05%,0.7829 62.14%,0.8621 67.46%,0.8991 70.68%,0.9299 74.03%,0.9545 77.52%,0.9735 81.21%,0.9865 85%,0.9949 89.15%,1 100%)",
    "--ease-out":
      "linear(0 0%, 0.4322 6.7%, 0.5876 9.63%, 0.7165 12.53%, 0.8238 15.53%, 0.9087 18.63%, 0.9731 21.89%, 1.0188 25.4%, 1.0377 27.67%, 1.0507 30.11%, 1.058 32.77%, 1.0598 35.74%, 1.0528 41.1%, 1.0164 56.54%, 1.004 65.49%, 0.998 78.52%, 1 100%)",
    "--elastic-out":
      "linear( 0, 0.2178 2.1%, 1.1144 8.49%, 1.2959 10.7%, 1.3463 11.81%, 1.3705 12.94%, 1.3726, 1.3643 14.48%, 1.3151 16.2%, 1.0317 21.81%, 0.941 24.01%, 0.8912 25.91%, 0.8694 27.84%, 0.8698 29.21%, 0.8824 30.71%, 1.0122 38.33%, 1.0357, 1.046 42.71%, 1.0416 45.7%, 0.9961 53.26%, 0.9839 57.54%, 0.9853 60.71%, 1.0012 68.14%, 1.0056 72.24%, 0.9981 86.66%, 1 )",
  },
  html: {
    MozOsxFontSmoothing: "grayscale",
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
    WebkitTextSizeAdjust: "100%",
  },
  body: {
    bg: { base: "white", _dark: "stone.900" },
  },
});

export const breakpoints = { "3xl": "1800px" } as const;

export const shadows = {
  "3xl": { value: "5px 5px 0px 0px rgba(1, 1, 1, 1)" },
  "4xl": { value: "8px 8px 0px 0px rgba(1, 1, 1, 1)" },
  "inner-sm": { value: "inset 0 0 4px 4px hsla(24, 10%, 10%, 0.18)" },
} as const;

export const fonts = {
  body: { value: "var(--font-roboto), sans-serif" },
  heading: { value: "var(--font-roboto-condensed), sans-serif" },
} as const;

export const zIndex = {
  footer: { value: 5000 },
  header: { value: 6000 },
  dropdown: { value: 7000 },
  overlay: { value: 8000 },
  modal: { value: 9000 },
} as const;

export const colors = {
  brand: {
    50: { value: "{colors.blue.100}" },
    100: { value: "{colors.blue.100}" },
    200: { value: "{colors.blue.200}" },
    300: { value: "{colors.blue.300}" },
    400: { value: "{colors.blue.400}" },
    500: { value: "{colors.blue.500}" },
    600: { value: "{colors.blue.600}" },
    700: { value: "{colors.blue.700}" },
    800: { value: "{colors.blue.800}" },
    900: { value: "{colors.blue.900}" },
    950: { value: "{colors.blue.950}" },
  },
  danger: {
    50: { value: "{colors.red.100}" },
    100: { value: "{colors.red.100}" },
    200: { value: "{colors.red.200}" },
    300: { value: "{colors.red.300}" },
    400: { value: "{colors.red.400}" },
    500: { value: "{colors.red.500}" },
    600: { value: "{colors.red.600}" },
    700: { value: "{colors.red.700}" },
    800: { value: "{colors.red.800}" },
    900: { value: "{colors.red.900}" },
    950: { value: "{colors.red.950}" },
  },
  success: {
    50: { value: "{colors.green.100}" },
    100: { value: "{colors.green.100}" },
    200: { value: "{colors.green.200}" },
    300: { value: "{colors.green.300}" },
    400: { value: "{colors.green.400}" },
    500: { value: "{colors.green.500}" },
    600: { value: "{colors.green.600}" },
    700: { value: "{colors.green.700}" },
    800: { value: "{colors.green.800}" },
    900: { value: "{colors.green.900}" },
    950: { value: "{colors.green.950}" },
  },
  warning: {
    50: { value: "{colors.orange.100}" },
    100: { value: "{colors.orange.100}" },
    200: { value: "{colors.orange.200}" },
    300: { value: "{colors.orange.300}" },
    400: { value: "{colors.orange.400}" },
    500: { value: "{colors.orange.500}" },
    600: { value: "{colors.orange.600}" },
    700: { value: "{colors.orange.700}" },
    800: { value: "{colors.orange.800}" },
    900: { value: "{colors.orange.900}" },
    950: { value: "{colors.orange.950}" },
  },
  info: {
    50: { value: "{colors.sky.100}" },
    100: { value: "{colors.sky.100}" },
    200: { value: "{colors.sky.200}" },
    300: { value: "{colors.sky.300}" },
    400: { value: "{colors.sky.400}" },
    500: { value: "{colors.sky.500}" },
    600: { value: "{colors.sky.600}" },
    700: { value: "{colors.sky.700}" },
    800: { value: "{colors.sky.800}" },
    900: { value: "{colors.sky.900}" },
    950: { value: "{colors.sky.950}" },
  },
} as const;

export const gradients = {
  "side-fog": {
    value:
      "linear-gradient(to right, transparent 0, #000 128px, #000 calc(100%-128px), transparent 100%)",
  },
} as const;

export const keyframes = {
  enter: {
    from: {
      opacity: "var(--enter-opacity, 1)",
      transform:
        "translate3d(var(--enter-translate-x, 0), var(--enter-translate-y, 0), 0) scale3d(var(--enter-scale, 1), var(--enter-scale, 1), var(--enter-scale, 1)) rotate(var(--enter-rotate, 0))",
    },
  },
  exit: {
    to: {
      opacity: "var(--exit-opacity, 1)",
      transform:
        "translate3d(var(--exit-translate-x, 0), var(--exit-translate-y, 0), 0) scale3d(var(--exit-scale, 1), var(--exit-scale, 1), var(--exit-scale, 1)) rotate(var(--exit-rotate, 0))",
    },
  },
  fadeIn: {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
  fadeOut: {
    "0%": { opacity: 1 },
    "100%": { opacity: 0 },
  },
  slideInFromTop: {
    "0%": { transform: "translateY(-100%)" },
    "100%": { transform: "translateY(0)" },
  },
  slideInFromBottom: {
    "0%": { transform: "translateY(1000%)" },
    "100%": { transform: "translateY(0)" },
  },
  slideOutToRight: {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(120%)" },
  },
  spin: {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
  "infinite-scroll": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-100%)" },
  },
} as const;

export const animations = {
  enter: { value: "enter 0.5s var(--ease-out)" },
  exit: { value: "exit 0.5s var(--elastic-out)" },
  fadeIn: { value: "fadeIn 0.5s var(--ease-out)" },
  fadeOut: { value: "fadeOut 0.5s var(--elastic-out)" },
  slideInFromTop: { value: "slideInFromTop 0.6s var(--ease-out)" },
  slideInFromBottom: { value: "slideInFromBottom 0.6s var(--ease-out)" },
  slideOutToRight: { value: "slideOutToRight 0.9s var(--elastic-out)" },
  spin: { value: "spin 1s linear infinite" },
  "infinite-scroll": { value: "infinite-scroll 50s linear infinite" },
} as const;

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
        gradients,
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
