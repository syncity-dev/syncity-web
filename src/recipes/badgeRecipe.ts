import { cva } from "../../styled-system/css";

export const badgeRecipe = cva({
  base: {
    rounded: "sm",
    borderWidth: "2",
    borderColor: "gray-light",
    shadow: "3xl",
    fontWeight: "medium",
  },
  variants: {
    visual: {
      solid: {},
      outline: {},
    },
    status: {
      default: {
        color: "gray-light",
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
        bg: "red",
        borderColor: "black",
      },
    },
    size: {
      sm: { paddingInline: "3", paddingBlock: "1.5", fontSize: "12px" },
      md: { paddingInline: "4", paddingBlock: "2", fontSize: "16px" },
      lg: { paddingInline: "6", paddingBlock: "3", fontSize: "20px" },
    },
  },
  compoundVariants: [
    {
      visual: "solid",
      status: "default",
      css: {
        borderColor: "black",
        bg: "light-gray",
        color: "black",
      },
    },
    {
      visual: "outline",
      status: "default",
      css: {
        borderColor: "black",
        bg: "transparent",
        color: "black",
      },
    },
    {
      visual: "solid",
      status: "warning",
      css: {
        borderColor: "black",
        bg: "warning",
        color: "black",
      },
    },
    {
      visual: "outline",
      status: "warning",
      css: {
        borderColor: "warning",
        bg: "transparent",
        color: "warning",
      },
    },
    {
      visual: "solid",
      status: "success",
      css: {
        borderColor: "black",
        bg: "success",
        color: "black",
      },
    },
    {
      visual: "outline",
      status: "success",
      css: {
        borderColor: "success-dark",
        bg: "transparent",
        color: "success-dark",
      },
    },
    {
      visual: "solid",
      status: "danger",
      css: { borderColor: "black", bg: "red", color: "light-gray" },
    },
    {
      visual: "outline",
      status: "danger",
      css: {
        borderColor: "red",
        bg: "transparent",
        color: "red",
      },
    },
  ],
  defaultVariants: {
    status: "default",
  },
});
