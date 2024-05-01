import { cva } from "../../styled-system/css";

export const buttonRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "4px",
    borderWidth: "2px",
    shadow: "3xl",
    transition: "all 0.3s ease-in",
    _hover: {
      shadow: "4xl",
      transform: "scale(1.025)",
      transition: "all 0.3s ease-out",
    },
  },
  variants: {
    visual: {
      solid: {},
      outline: {},
    },
    size: {
      sm: { paddingInline: "3", paddingBlock: "1.5", fontSize: "12px" },
      md: { paddingInline: "4", paddingBlock: "2", fontSize: "16px" },
      lg: { paddingInline: "6", paddingBlock: "3", fontSize: "20px" },
    },
    color: {
      red: {},
      gray: {},
      yellow: {},
    },
  },
  compoundVariants: [
    {
      visual: "solid",
      color: "red",
      css: { borderColor: "red", bg: "red", color: "light-gray" },
    },
    {
      visual: "outline",
      color: "red",
      css: {
        borderColor: "red",
        bg: "transparent",
        color: "red",
        _hover: {
          bg: "red",
          color: "light-gray",
        },
      },
    },
    {
      visual: "solid",
      color: "gray",
      css: {
        borderColor: "gray",
        bg: "gray",
        color: "light-gray",
      },
    },
    {
      visual: "outline",
      color: "gray",
      css: {
        borderColor: "gray",
        bg: "transparent",
        color: "gray",
        _hover: {
          bg: "gray",
          color: "light-gray",
        },
      },
    },
    {
      visual: "solid",
      color: "yellow",
      css: {
        borderColor: "yellow",
        bg: "yellow",
        color: "light-gray",
      },
    },
    {
      visual: "outline",
      color: "yellow",
      css: {
        borderColor: "yellow",
        bg: "transparent",
        color: "yellow",
        _hover: {
          bg: "yellow",
          color: "light-gray",
        },
      },
    },
  ],
  defaultVariants: {
    visual: "solid",
    size: "md",
    color: "red",
  },
});
