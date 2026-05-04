import { cva } from "@/styled-system/css";

export const cardRecipe = cva({
  base: {
    padding: "5",
    rounded: "sm",
    borderWidth: "thin",
    borderColor: "border.default",
    borderStyle: "solid",
    bgColor: "bg.default",
    shadow: "md",
  },
});
