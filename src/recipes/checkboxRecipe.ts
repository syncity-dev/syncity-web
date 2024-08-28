import { sva } from "../../styled-system/css";

export const checkboxRecipe = sva({
  slots: ["control"],
  base: {
    control: {
      fontFamily: "body",
      accentColor: "black",
      outlineOffset: "0",
    },
  },
  variants: {
    size: {
      sm: {
        control: { width: "4", height: "4" },
      },
      md: {
        control: { width: "5", height: "5" },
      },
      lg: {
        control: { width: "6", height: "6" },
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
