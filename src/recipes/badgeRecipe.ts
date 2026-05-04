import { cva } from "@/styled-system/css";

export const badgeRecipe = cva({
  base: {
    fontFamily: "body",
    rounded: "sm",
    borderWidth: "2",
    borderColor: "border.default",
    fontWeight: "medium",
  },
  variants: {
    visual: {
      solid: {},
      outline: {},
    },
    status: {
      default: {},
      success: {},
      warning: {},
      danger: {},
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
        borderColor: "slate.12",
        bg: "slate.4",
        color: "slate.12",
      },
    },
    {
      visual: "outline",
      status: "default",
      css: {
        borderColor: "border.default",
        bg: "transparent",
        color: "fg.muted",
      },
    },
    {
      visual: "solid",
      status: "warning",
      css: {
        borderColor: "slate.12",
        bg: "amber.9",
        color: "slate.12",
      },
    },
    {
      visual: "outline",
      status: "warning",
      css: {
        borderColor: "amber.9",
        bg: "transparent",
        color: "amber.9",
      },
    },
    {
      visual: "solid",
      status: "success",
      css: {
        borderColor: "slate.12",
        bg: "green.9",
        color: "slate.12",
      },
    },
    {
      visual: "outline",
      status: "success",
      css: {
        borderColor: "green.9",
        bg: "transparent",
        color: "green.9",
      },
    },
    {
      visual: "solid",
      status: "danger",
      css: {
        borderColor: "slate.12",
        bg: "red.9",
        color: "slate.12",
      },
    },
    {
      visual: "outline",
      status: "danger",
      css: {
        borderColor: "red.8",
        bg: "transparent",
        color: "red.8",
      },
    },
  ],
  defaultVariants: {
    status: "default",
  },
});
