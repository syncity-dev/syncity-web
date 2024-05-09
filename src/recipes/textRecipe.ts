import { cva } from "../../styled-system/css";

export const textRecipe = cva({
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
  },
  defaultVariants: {
    size: "md",
  },
});
