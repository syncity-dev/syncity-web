import { sva } from "../../styled-system/css";

export const textAreaRecipe = sva({
  slots: ["control"],
  base: {
    control: {
      fontFamily: "body",
      borderWidth: "1px",
      borderColor: "stone.200",
      bgColor: "white",
      color: "stone.900",
      rounded: "sm",
      outlineOffset: "1",
      outlineColor: "sky.600",
      shadow: "md",
      _placeholder: {
        color: "stone.400",
      },
    },
  },
  variants: {
    size: {
      sm: {
        control: { paddingInline: "2", paddingBlock: "2", fontSize: "sm" },
      },
      md: {
        control: { paddingInline: "4", paddingBlock: "4", fontSize: "md" },
      },
      lg: {
        control: { paddingInline: "6", paddingBlock: "6", fontSize: "lg" },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
