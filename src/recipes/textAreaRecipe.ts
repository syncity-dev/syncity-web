import { sva } from "../../styled-system/css";

export const textAreaRecipe = sva({
  slots: ["root", "control", "required"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    control: {
      accentColor: "black",
      borderWidth: "2px",
      rounded: "sm",
      boxShadow: "3xl",
      outlineColor: "yellow",
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
