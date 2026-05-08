import { ElementType } from "react";
import { ColorModePreference, ResolvedColorMode } from "@/utils/colorMode";
import { Monitor, Sun, Moon } from "lucide-react";

export const OPTIONS: {
  value: ColorModePreference;
  label: string;
  Icon: React.ElementType;
}[] = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Monitor },
];

export const resolvedIcon: Record<ResolvedColorMode, ElementType> = {
  light: Sun,
  dark: Moon,
};
