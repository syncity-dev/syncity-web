import { useRef } from "react";
import { applyColorMode, resolveColorMode } from "@/utils/colorMode";
import { useColorMode } from "@/hooks/useColorMode";
import type { ColorModePreference } from "@/utils/colorMode";

export function useColorModeSwitcher() {
  const { preference, resolved, setPreference } = useColorMode();
  const committedPreference = useRef<ColorModePreference>(preference);

  const onOpenChange = ({ open }: { open: boolean }) => {
    if (!open) applyColorMode(resolveColorMode(committedPreference.current));
  };

  const onHighlightChange = ({
    highlightedValue,
  }: {
    highlightedValue: string | null;
  }) => {
    if (highlightedValue) {
      applyColorMode(resolveColorMode(highlightedValue as ColorModePreference));
    } else {
      applyColorMode(resolveColorMode(committedPreference.current));
    }
  };

  return {
    preference,
    resolved,
    setPreference,
    committedPreference,
    onOpenChange,
    onHighlightChange,
  };
}
