import { cva } from "@/styled-system/css";

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
    outlineColor: "accent.emphasis",
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
      brand: {},
    },
  },
  compoundVariants: [
    {
      visual: "solid",
      color: "brand",
      css: {
        borderColor: "accent.emphasis",
        bg: "accent.emphasis",
        color: "white",
        _hover: {
          borderColor: "accent.default",
          bg: "accent.default",
        },
      },
    },
    {
      visual: "outline",
      color: "brand",
      css: {
        borderColor: "accent.emphasis",
        bg: "transparent",
        color: "accent.emphasis",
        _hover: {
          borderColor: "accent.emphasis",
          bg: "accent.emphasis",
          color: "white",
        },
      },
    },
    {
      visual: "link",
      color: "brand",
      css: {
        border: "none",
        bg: "transparent",
        color: "blue.11",
        shadow: "none",
        _hover: {
          color: "blue.12",
          shadow: "none",
        },
      },
    },
    {
      visual: "solid",
      color: "red",
      css: {
        borderColor: "red.11",
        bg: "red.11",
        color: "white",
        _hover: {
          bg: "red.10",
          borderColor: "red.10",
        },
      },
    },
    {
      visual: "outline",
      color: "red",
      css: {
        borderColor: "red.11",
        bg: "transparent",
        color: "red.11",
        _hover: {
          bg: "red.10",
          borderColor: "red.10",
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
        color: "red.11",
        _hover: {
          color: "red.10",
        },
      },
    },
    {
      visual: "solid",
      color: "black",
      css: {
        borderColor: "slate.12",
        bg: "slate.12",
        color: "slate.1",
        _hover: {
          bg: "slate.11",
          borderColor: "slate.11",
        },
      },
    },
    {
      visual: "outline",
      color: "black",
      css: {
        borderColor: "slate.12",
        bg: "transparent",
        color: "slate.12",
        _hover: {
          bg: "slate.11",
          borderColor: "slate.11",
          color: "slate.1",
        },
      },
    },
    {
      visual: "link",
      color: "black",
      css: {
        border: "none",
        bg: "transparent",
        color: "fg.default",
        shadow: "none",
        _hover: {
          color: "fg.muted",
          shadow: "none",
        },
      },
    },
    {
      visual: "solid",
      color: "yellow",
      css: {
        borderColor: "amber.5",
        bg: "amber.5",
        color: "slate.12",
        _hover: {
          borderColor: "amber.4",
          bg: "amber.4",
        },
      },
    },
    {
      visual: "outline",
      color: "yellow",
      css: {
        borderColor: "amber.5",
        bg: "transparent",
        color: "slate.12",
        _hover: {
          borderColor: "amber.4",
          bg: "amber.4",
        },
      },
    },
    {
      visual: "link",
      color: "yellow",
      css: {
        border: "none",
        bg: "transparent",
        color: "amber.10",
        shadow: "none",
        _hover: {
          color: "amber.11",
          shadow: "none",
        },
      },
    },
  ],
  defaultVariants: {
    visual: "solid",
    size: "md",
    color: "brand",
  },
});
