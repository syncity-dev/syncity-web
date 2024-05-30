import { sva } from "../../styled-system/css";
import { Z_INDEX } from "../constants/styles";

export const drawerRecipe = sva({
  slots: [
    "overlay",
    "content",
    "contentInner",
    "header",
    "footer",
    "title",
    "description",
  ],
  base: {
    overlay: {
      position: "fixed",
      inset: 0,
      zIndex: Z_INDEX.overlay,
      backgroundColor: "overlay",
    },
    content: {
      position: "fixed",
      insetInline: 0,
      bottom: 0,
      zIndex: Z_INDEX.modal,
      marginTop: 24,
      display: "flex",
      height: "auto",
      flexDirection: "column",
      background: "white",
    },
    contentInner: {
      marginInline: "auto",
      mt: 4,
      h: 2,
      w: "100px",
      rounded: "full",
      background: "muted",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      width: "full",
      gap: 1.5,
      padding: 4,
    },
    footer: {
      marginTop: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: 4,
    },
    title: {
      fontFamily: "heading",
      fontSize: "xl",
      fontWeight: "semibold",
      lineHeight: "none",
      letterSpacing: "wide",
    },
    description: {
      fontSize: "sm",
      color: "muted",
    },
  },
  variants: {},
  defaultVariants: {
    size: "md",
  },
});
