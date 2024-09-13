import { cva } from "../../styled-system/css";

export const cardRecipe = cva({
  base: {
    padding: "5",
    rounded: "sm",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    borderWidth: "thin",
    borderColor: "stone.200",
    borderStyle: "solid",
    bgColor: "white",
    shadow: "md",
  },
});
