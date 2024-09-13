export const fonts = {
  body: { value: "var(--font-poppins), serif" },
  heading: { value: "var(--font-sintony), sans-serif" },
} as const;

export const breakpoints = { "3xl": "1800px" } as const;

export const shadows = {
  "3xl": { value: "5px 5px 0px 0px rgba(1, 1, 1, 1)" },
  "4xl": { value: "8px 8px 0px 0px rgba(1, 1, 1, 1)" },
  "inner-sm": { value: "inset 0 0 4px 4px hsla(24, 10%, 10%, 0.18)" },
} as const;

export const zIndex = {
  footer: { value: 5000 },
  header: { value: 6000 },
  dropdown: { value: 7000 },
  overlay: { value: 8000 },
  modal: { value: 9000 },
} as const;
