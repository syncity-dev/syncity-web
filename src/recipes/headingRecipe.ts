import { cva } from "@/styled-system/css";

export const headingRecipe = cva({
  base: {
    fontFamily: "heading",
    fontWeight: "bold",
    color: "fg.default",
    letterSpacing: "wide",
  },
  variants: {
    as: {
      h1: { textStyle: "5xl" },
      h2: { textStyle: "4xl" },
      h3: { textStyle: "3xl" },
      h4: { textStyle: "2xl" },
      h5: { textStyle: "xl" },
      h6: { textStyle: "lg" },
    },
  },
  defaultVariants: {
    as: "h2",
  },
});
