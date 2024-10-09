import { cva } from "../../styled-system/css";

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
