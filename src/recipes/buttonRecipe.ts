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
    transition: "all 0.3s var(--ease-in)",
    outlineOffset: "1",
    outlineColor: "sky.600",
  },
  variants: {
    visual: {
      solid: { shadow: "md" },
      outline: { shadow: "md" },
      link: {},
    },
    size: {
      sm: { paddingInline: "2.5", paddingBlock: "2", fontSize: "14px" },
      md: { paddingInline: "4", paddingBlock: "2.5", fontSize: "14px" },
      lg: { paddingInline: "4", paddingBlock: "2.5", fontSize: "16px" },
    },
    color: {
      red: {},
      black: {},
      yellow: {},
    },
  },
  compoundVariants: [
    {
      visual: "solid",
      color: "red",
      css: {
        borderColor: "red.700",
        bg: "red.700",
        color: "white",
        _hover: {
          bg: "red.600",
          borderColor: "red.600",
        },
      },
    },
    {
      visual: "outline",
      color: "red",
      css: {
        borderColor: "red.700",
        bg: "transparent",
        color: "red.700",
        _hover: {
          bg: "red.600",
          borderColor: "red.600",
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
        color: "red.700",
        _hover: {
          color: "red.600",
        },
      },
    },
    {
      visual: "solid",
      color: "black",
      css: {
        borderColor: "stone.900",
        bg: "stone.900",
        color: "stone.50",
        _hover: {
          bg: "stone.700",
          borderColor: "stone.700",
        },
      },
    },
    {
      visual: "outline",
      color: "black",
      css: {
        borderColor: "stone.900",
        bg: "transparent",
        color: "stone.900",
        _hover: {
          bg: "stone.700",
          borderColor: "stone.700",
          color: "stone.50",
        },
      },
    },
    {
      visual: "link",
      color: "black",
      css: {
        border: "none",
        bg: "transparent",
        color: "stone.900",
        shadow: "none",
        _hover: {
          color: "stone.700",
          shadow: "none",
        },
      },
    },
    {
      visual: "solid",
      color: "yellow",
      css: {
        borderColor: "yellow.300",
        bg: "yellow.300",
        color: "stone.900",
        _hover: {
          borderColor: "yellow.200",
          bg: "yellow.200",
        },
      },
    },
    {
      visual: "outline",
      color: "yellow",
      css: {
        borderColor: "yellow.300",
        bg: "transparent",
        color: "stone.900",
        _hover: {
          borderColor: "yellow.200",
          bg: "yellow.200",
        },
      },
    },

    {
      visual: "link",
      color: "yellow",
      css: {
        border: "none",
        bg: "transparent",
        color: "yellow.700",
        shadow: "none",
        _hover: {
          color: "yellow.800",
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
