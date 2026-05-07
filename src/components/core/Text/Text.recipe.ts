import { cva } from "@/styled-system/css";

export const text = cva({
  base: {},
  variants: {
    size: {
      sm: {
        label: { fontSize: "sm" },
      },
      md: {
        label: { fontSize: "md" },
      },
      lg: {
        label: { fontSize: "lg" },
      },
    },
    as: {
      p: { fontFamily: "body" },
      label: { fontFamily: "body" },
      small: { fontFamily: "body" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
