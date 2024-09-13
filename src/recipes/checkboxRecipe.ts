import { sva } from "../../styled-system/css";

export const checkboxRecipe = sva({
  slots: ["control"],
  base: {
    control: {
      fontFamily: "body",
      accentColor: "stone.900",
      outlineOffset: "0.5",
      outlineColor: "sky.600",
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
        control: { backgroundColor: "stone.900" },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
