import { cva } from "@/styled-system/css";

export const logo = cva({
  base: {
    display: "block",
    rounded: "full",
    overflow: "hidden",
    flexShrink: "0",
  },
  variants: {
    size: {
      sm: { width: "16", height: "16" },
      md: { width: "24", height: "24" },
      lg: { width: "32", height: "32" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
