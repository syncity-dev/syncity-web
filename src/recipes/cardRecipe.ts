import { cva } from "../../styled-system/css";

export const cardRecipe = cva({
  base: {
    padding: "5",
    rounded: "sm",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  variants: {
    outlined: {
      true: {
        borderWidth: "2px",
        borderColor: "black",
        borderStyle: "solid",
      },
    },
  },
  defaultVariants: {
    outlined: true,
  },
});
