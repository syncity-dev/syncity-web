import { cva } from "../../styled-system/css";

export const cardRecipe = cva({
  base: {
    padding: "5",
    borderRadius: "4px",
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
    heavyShadow: {
      true: {
        boxShadow: "3xl",
      },
    },
  },
  defaultVariants: {
    outlined: true,
    heavyShadow: false,
  },
});
