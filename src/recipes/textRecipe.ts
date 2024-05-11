import { cva } from "../../styled-system/css";

export const textRecipe = cva({
  base: {},
  variants: {
    size: {
      sm: {
        label: { fontSize: "sm" },
      },
      md: {
        label: { fontSize: "md" },
      },
      lg: {
        label: { fontSize: "lg" },
      },
    },
    as: {
      p: { fontFamily: "body" },
      label: { fontFamily: "body" },
      h1: { fontFamily: "heading" },
      h2: { fontFamily: "heading" },
      h3: { fontFamily: "heading" },
      h4: { fontFamily: "heading" },
      h5: { fontFamily: "heading" },
      h6: { fontFamily: "heading" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
