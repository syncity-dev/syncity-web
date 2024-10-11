import { cva } from "../../styled-system/css";

export const cardRecipe = cva({
  base: {
    padding: "5",
    rounded: "sm",
    borderWidth: "thin",
    borderColor: "stone.200",
    borderStyle: "solid",
    bgColor: "white",
    shadow: "md",
  },
});
