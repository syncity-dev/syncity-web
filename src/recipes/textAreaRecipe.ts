import { sva } from "../../styled-system/css";

export const textAreaRecipe = sva({
  slots: ["control"],
  base: {
    control: {
      fontFamily: "body",
      accentColor: "black",
      borderWidth: "2px",
      rounded: "sm",
    },
  },
  variants: {
    size: {
      sm: {
        control: { paddingInline: "2", paddingBlock: "2" },
      },
      md: {
        control: { paddingInline: "4", paddingBlock: "4" },
      },
      lg: {
        control: { paddingInline: "6", paddingBlock: "6" },
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
