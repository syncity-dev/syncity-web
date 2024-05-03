import { sva } from "../../styled-system/css";

export const checkboxRecipe = sva({
  slots: ["root", "control", "label", "required"],
  base: {
    root: { display: "flex", alignItems: "center", gap: "2" },
    control: {
      accentColor: "black",
      outlineColor: "yellow",
      outlineOffset: "0",
    },
    label: { marginStart: "1", fontWeight: "bold" },
    required: { color: "red" },
  },
  variants: {
    size: {
      sm: {
        control: { width: "6", height: "6" },
        label: { fontSize: "sm" },
      },
      md: {
        control: { width: "8", height: "8" },
        label: { fontSize: "md" },
      },
      lg: {
        control: { width: "10", height: "10" },
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
