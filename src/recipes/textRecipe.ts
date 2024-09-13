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
      h1: { fontFamily: "heading", color: "stone.900" },
      h2: { fontFamily: "heading", color: "stone.900" },
      h3: { fontFamily: "heading", color: "stone.900" },
      h4: { fontFamily: "heading", color: "stone.900" },
      h5: { fontFamily: "heading", color: "stone.900" },
      h6: { fontFamily: "heading", color: "stone.900" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
