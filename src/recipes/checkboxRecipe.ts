import { sva } from "@/styled-system/css";

export const checkboxRecipe = sva({
  slots: ["control"],
  base: {
    control: {
      fontFamily: "body",
      accentColor: "fg.default",
      outlineOffset: "0.5",
      outlineColor: "accent.emphasis",
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
        control: { backgroundColor: "accent.default" },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
