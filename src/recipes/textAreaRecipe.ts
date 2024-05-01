import { sva } from "../../styled-system/css";

export const textAreaRecipe = sva({
  slots: ["root", "control", "label"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    control: {
      accentColor: "black",
      borderWidth: "2px",
      borderRadius: "4px",
      boxShadow: "3xl",
      outlineColor: "yellow",
    },
    label: { fontWeight: "bold" },
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
