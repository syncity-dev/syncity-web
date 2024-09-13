import { defineConfig } from "@pandacss/dev";

const fonts = {
  body: { value: "var(--font-sintony), serif" },
  heading: { value: "var(--font-russo-one), sans-serif" },
};

const breakpoints = { "3xl": "1800px" };

// const colors = {
//   red: { value: "#A20104" },
//   "dark-red": { value: "#700102" },
//   "darkest-red": { value: "#4B0102" },
//   yellow: { value: "#DB9B48" },
//   black: { value: "#010101" },
//   overlay: { value: "rgba(1, 1, 1, 0.85)" },
//   gray: { value: "#ADA294" },
//   "light-gray": { value: "#E7E7E7" },
//   "dark-gray": { value: "#373739" },
//   success: { value: "#26de81" },
//   "success-dark": { value: "#20bf6b" },
//   warning: { value: "#fa8231" },
// };

const shadows = {
  "3xl": { value: "5px 5px 0px 0px rgba(1, 1, 1, 1)" },
  "4xl": { value: "8px 8px 0px 0px rgba(1, 1, 1, 1)" },
};

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
      },
    },
  },

  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
