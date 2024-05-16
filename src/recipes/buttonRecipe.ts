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
    shadow: "3xl",
    transition: "all 0.3s ease-in",
    _hover: {
      shadow: "4xl",
      transform: "translateX(-4px)",
      transition: "all 0.3s ease-out",
    },
  },
  variants: {
    visual: {
      solid: {},
      outline: {},
      link: {},
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
      visual: "link",
      color: "red",
      css: {
        border: "none",
        bg: "transparent",
        color: "red",
        shadow: "none",
        _hover: {
          color: "dark-red",
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
        borderColor: "dark-gray",
        bg: "transparent",
        color: "dark-gray",
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
        color: "dark-gray",
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
        color: "light-gray",
      },
    },
    {
      visual: "outline",
      color: "yellow",
      css: {
        borderColor: "yellow",
        bg: "transparent",
        color: "dark-gray",
        _hover: {
          bg: "yellow",
          color: "dark-gray",
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
          color: "dark-gray",
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
