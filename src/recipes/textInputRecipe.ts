import { sva } from "../../styled-system/css";

export const textInputRecipe = sva({
  slots: ["control"],
  base: {
    control: {
      accentColor: "black",
      borderWidth: "2px",
      rounded: "sm",
    },
  },
  variants: {
    size: {
      sm: {
        control: { paddingInline: "2", paddingBlock: "2" },
        label: { fontSize: "sm" },
      },
      md: {
        control: { paddingInline: "4", paddingBlock: "4" },
        label: { fontSize: "md" },
      },
      lg: {
        control: { paddingInline: "6", paddingBlock: "6" },
        label: { fontSize: "lg" },
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
