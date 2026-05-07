import { cva } from "@/styled-system/css";
import { textTransition } from "@/theme/motion/transitions";

export const link = cva({
  base: {
    cursor: "pointer",
    fontFamily: "body",
    ...textTransition,
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "accent.default",
      outlineOffset: "2px",
      rounded: "l1",
    },
  },
  defaultVariants: {
    visual: "underline",
  },
  variants: {
    visual: {
      underline: {
        color: "accent.default",
        textDecoration: "underline",
        textDecorationColor: "accent.muted",
        textUnderlineOffset: "3px",
        _hover: {
          color: "accent.emphasis",
          textDecorationColor: "accent.default",
        },
      },
      plain: {
        color: "fg.default",
        textDecoration: "none",
        _hover: {
          color: "accent.default",
        },
      },
      subtle: {
        color: "fg.muted",
        textDecoration: "none",
        _hover: {
          color: "fg.default",
        },
      },
    },
  },
});
