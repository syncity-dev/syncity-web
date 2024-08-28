import { cva } from "../../styled-system/css";

export const buttonRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "body",
    fontWeight: "bold",
    cursor: "pointer",
    rounded: "sm",
    borderWidth: "2px",
    transition: "all 0.3s ease-in",
  },
  variants: {
    visual: {
      solid: {},
      outline: {},
      link: {},
    },
    size: {
      sm: { paddingInline: "2.5", paddingBlock: "2", fontSize: "14px" },
      md: { paddingInline: "4", paddingBlock: "2.5", fontSize: "14px" },
      lg: { paddingInline: "4", paddingBlock: "2.5", fontSize: "16px" },
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
      css: { borderColor: "red", bg: "red", color: "white" },
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
          color: "white",
        },
      },
    },
    {
      visual: "link",
      color: "red",
      css: {
        border: "none",
        bg: "transparent",
        color: "red",
        shadow: "none",
        _hover: {
          color: "red",
          shadow: "none",
        },
      },
    },
    {
      visual: "solid",
      color: "gray",
      css: {
        borderColor: "gray",
        bg: "gray",
        color: "black",
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
          borderColor: "gray",
          color: "black",
        },
      },
    },
    {
      visual: "link",
      color: "gray",
      css: {
        border: "none",
        bg: "transparent",
        color: "gray",
        shadow: "none",
        _hover: {
          color: "black",
          shadow: "none",
        },
      },
    },
    {
      visual: "solid",
      color: "yellow",
      css: {
        borderColor: "yellow",
        bg: "yellow",
        color: "gray",
      },
    },
    {
      visual: "outline",
      color: "yellow",
      css: {
        borderColor: "yellow",
        bg: "transparent",
        color: "gray",
        _hover: {
          bg: "yellow",
          color: "gray",
        },
      },
    },

    {
      visual: "link",
      color: "yellow",
      css: {
        border: "none",
        bg: "transparent",
        color: "yellow",
        shadow: "none",
        _hover: {
          color: "gray",
          shadow: "none",
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
