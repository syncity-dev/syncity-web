import { sva } from "../../styled-system/css";

export const toast = sva({
  slots: ["root", "viewport", "action", "close", "title", "description"],
  base: {
    root: {
      pointerEvents: "auto",
      position: "relative",
      display: "flex",
      w: "full",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "4",
      overflow: "hidden",
      rounded: "md",
      border: "base",
      p: "6",
      pr: "8",
      shadow: "lg",
      transition: "all",

      "&[data-swipe=cancel]": {
        transform: "translateX(0)",
      },

      "&[data-swipe=end]": {
        transform: "translateX(var(--radix-toast-swipe-end-x))",
        animation: "slideOutToRight",
      },

      "&[data-swipe=move]": {
        transform: "translateX(var(--radix-toast-swipe-move-x))",
        transition: "none",
      },

      "&[data-state=open]": {
        animation: "slideInFromTop",

        sm: {
          animation: "slideInFromBottom",
        },
      },

      "&[data-state=closed]": {
        animation: "slideOutToRight",
      },
    },
    action: {
      display: "inline-flex",
      h: "8",
      flexShrink: "0",
      alignItems: "center",
      justifyContent: "center",
      rounded: "md",
      border: "base",
      bg: "transparent",
      px: "3",
      textStyle: "sm",
      fontWeight: "medium",
      transition: "colors",
      cursor: "pointer",

      _hover: {
        bg: "secondary",
      },

      _focus: {
        outline: "2px solid transparent",
        outlineOffset: "2px",
      },

      _disabled: {
        pointerEvents: "none",
        opacity: "0.5",
      },
    },
    close: {
      position: "absolute",
      right: "2",
      top: "2",
      rounded: "md",
      opacity: "0",
      transition: "opacity",
      cursor: "pointer",

      _hover: {
        color: "foreground",
      },

      _groupHover: {
        opacity: "1",
      },

      _focus: {
        opacity: "1",
        outline: "2px solid transparent",
        outlineOffset: "2px",
      },
    },
    title: {
      textStyle: "sm",
      fontWeight: "semibold",
    },
    description: {
      textStyle: "sm",
      opacity: "0.9",
    },
  },
  variants: {
    variant: {
      default: {
        root: {
          bg: "stone.50",
        },
      },
      success: {
        root: {
          bg: "success.400",
          color: "success.950",
        },
        action: {
          border: "1px solid",
          borderColor: "success.950",

          _hover: {
            bg: "success.950",
            color: "success.50",
          },

          _focus: {
            focusRingColor: "success.950",
          },
        },
        close: {
          color: "success.950",

          _hover: {
            color: "success.900",
          },

          _focus: {
            focusRingColor: "success.50",
            focusRingOffsetColor: "success.100",
          },
        },
      },

      danger: {
        root: {
          bg: "danger.500",
          color: "danger.950",
        },
        action: {
          border: "1px solid",
          borderColor: "danger.950",

          _hover: {
            bg: "danger.950",
            color: "danger.50",
          },

          _focus: {
            focusRingColor: "danger.950",
          },
        },
        close: {
          color: "danger.950",

          _hover: {
            color: "danger.900",
          },

          _focus: {
            focusRingColor: "danger.400",
            focusRingOffsetColor: "danger.600",
          },
        },
      },
      warning: {
        root: {
          bg: "warning.500",
          color: "warning.950",
        },
        action: {
          border: "1px solid",
          borderColor: "warning.950",

          _hover: {
            bg: "warning.950",
            color: "warning.50",
          },

          _focus: {
            focusRingColor: "warning.950",
          },
        },
        close: {
          color: "warning.950",

          _hover: {
            color: "warning.900",
          },

          _focus: {
            focusRingColor: "warning.400",
            focusRingOffsetColor: "warning.600",
          },
        },
      },
      info: {
        root: {
          bg: "info.500",
          color: "info.950",
        },
        action: {
          border: "1px solid",
          borderColor: "info.950",

          _hover: {
            bg: "info.950",
            color: "info.50",
          },

          _focus: {
            focusRingColor: "info.950",
          },
        },
        close: {
          color: "info.950",

          _hover: {
            color: "info.900",
          },

          _focus: {
            focusRingColor: "info.400",
            focusRingOffsetColor: "info.600",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "info",
  },
});
