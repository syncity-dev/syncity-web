import { cva } from "../../styled-system/css";

export const badgeRecipe = cva({
  base: {
    fontFamily: "body",
    rounded: "sm",
    borderWidth: "2",
    borderColor: "stone.200",
    fontWeight: "medium",
  },
  variants: {
    visual: {
      solid: {},
      outline: {},
    },
    status: {
      default: {
        color: "stone.200",
        bg: "white",
      },
      success: {
        color: "black",
        bg: "success",
      },
      warning: {
        color: "black",
        bg: "warning",
      },
      danger: {
        color: "white",
        bg: "red.500",
        borderColor: "stone.950",
      },
    },
    size: {
      sm: { paddingInline: "3", paddingBlock: "1", fontSize: "12px" },
      md: { paddingInline: "4", paddingBlock: "1.5", fontSize: "16px" },
      lg: { paddingInline: "6", paddingBlock: "2", fontSize: "20px" },
    },
  },
  compoundVariants: [
    {
      visual: "solid",
      status: "default",
      css: {
        borderColor: "stone.900",
        bg: "stone.200",
        color: "stone.900",
      },
    },
    {
      visual: "outline",
      status: "default",
      css: {
        borderColor: "stone.200",
        bg: "transparent",
        color: "stone.200",
      },
    },
    {
      visual: "solid",
      status: "warning",
      css: {
        borderColor: "stone.900",
        bg: "orange.500",
        color: "stone.900",
      },
    },
    {
      visual: "outline",
      status: "warning",
      css: {
        borderColor: "orange.500",
        bg: "transparent",
        color: "orange.500",
      },
    },
    {
      visual: "solid",
      status: "success",
      css: {
        borderColor: "stone.900",
        bg: "green.500",
        color: "stone.900",
      },
    },
    {
      visual: "outline",
      status: "success",
      css: {
        borderColor: "green.500",
        bg: "transparent",
        color: "green.500",
      },
    },
    {
      visual: "solid",
      status: "danger",
      css: { borderColor: "stone.900", bg: "red.500", color: "stone.900" },
    },
    {
      visual: "outline",
      status: "danger",
      css: {
        borderColor: "red.400",
        bg: "transparent",
        color: "red.400",
      },
    },
  ],
  defaultVariants: {
    status: "default",
  },
});
