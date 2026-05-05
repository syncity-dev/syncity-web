import { sva, cva } from "@/styled-system/css";

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
          bg: "bg.subtle",
          color: "fg.default",
        },
      },
      success: {
        root: {
          bg: "green.3",
          color: "green.12",
        },
        action: {
          borderColor: "green.7",
          _hover: {
            bg: "green.9",
            color: "white",
          },
          _focus: {
            focusRingColor: "green.9",
          },
        },
        close: {
          color: "green.11",
          _hover: {
            color: "green.12",
          },
        },
      },
      danger: {
        root: {
          bg: "red.3",
          color: "red.12",
        },
        action: {
          borderColor: "red.7",
          _hover: {
            bg: "red.9",
            color: "white",
          },
          _focus: {
            focusRingColor: "red.9",
          },
        },
        close: {
          color: "red.11",
          _hover: {
            color: "red.12",
          },
        },
      },
      warning: {
        root: {
          bg: "amber.3",
          color: "amber.12",
        },
        action: {
          borderColor: "amber.7",
          _hover: {
            bg: "amber.9",
            color: "white",
          },
          _focus: {
            focusRingColor: "amber.9",
          },
        },
        close: {
          color: "amber.11",
          _hover: {
            color: "amber.12",
          },
        },
      },
      info: {
        root: {
          bg: "sky.3",
          color: "sky.12",
        },
        action: {
          borderColor: "sky.7",
          _hover: {
            bg: "sky.9",
            color: "slate.12",
          },
          _focus: {
            focusRingColor: "sky.9",
          },
        },
        close: {
          color: "sky.11",
          _hover: {
            color: "sky.12",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

export const toastViewport = cva({
  base: {
    position: "fixed",
    top: "0",
    zIndex: 100,
    display: "flex",
    maxH: "screen",
    w: "full",
    flexDirection: "column-reverse",
    p: "4",

    sm: {
      bottom: "0",
      right: "0",
      top: "auto",
      flexDirection: "column",
    },

    md: {
      maxW: "420px",
    },
  },
});
