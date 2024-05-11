import { sva } from "../../styled-system/css";

export const checkboxRecipe = sva({
  slots: ["control"],
  base: {
    control: {
      fontFamily: "body",
      accentColor: "black",
      outlineColor: "yellow",
      outlineOffset: "0",
    },
  },
  variants: {
    size: {
      sm: {
        control: { width: "6", height: "6" },
      },
      md: {
        control: { width: "8", height: "8" },
      },
      lg: {
        control: { width: "10", height: "10" },
      },
    },
    checked: {
      true: {
        control: { backgroundColor: "black" },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});