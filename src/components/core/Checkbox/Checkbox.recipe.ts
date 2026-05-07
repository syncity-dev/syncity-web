import { sva } from "@/styled-system/css";

export const checkbox = sva({
  slots: ["control"],
  base: {
    control: {
      fontFamily: "body",
      accentColor: "fg.default",
      outlineOffset: "0.5",
      outlineColor: "accent.emphasis",
      borderColor: "border.default",
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
        control: {
          accentColor: "accent.default",
          borderColor: "accent.default",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
