import { defineLayerStyles } from "@pandacss/dev";

export const layerStyles = defineLayerStyles({
  disabled: {
    value: {
      cursor: "not-allowed",
      opacity: "0.67",
      filter: "grayscale(100%)",
    },
  },

  /** Low-emphasis container: subtle tint, no border or shadow. */
  surfaceSubtle: {
    value: {
      backgroundColor: "{colors.slate.subtle.bg}",
    },
  },

  /** Raised panel: solid surface with border, no shadow (e.g. cards, inputs). */
  surfaceRaised: {
    value: {
      backgroundColor: "{colors.slate.surface.bg}",
      borderWidth: "thin",
      borderColor: "{colors.slate.surface.border}",
    },
  },

  /** Elevated panel: solid surface with shadow (e.g. floating cards). */
  surfaceElevated: {
    value: {
      backgroundColor: "{colors.slate.surface.bg}",
      boxShadow: "{shadows.lg}",
    },
  },

  /** Overlay surface: for dropdowns, popovers, menus. */
  surfaceOverlay: {
    value: {
      backgroundColor: "{colors.slate.surface.bg}",
      boxShadow: "{shadows.md}",
    },
  },
});
