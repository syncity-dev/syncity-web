import { useRef } from 'react';

import { useColorMode } from '@/hooks/useColorMode';
import type { ColorModePreference } from '@/utils/colorMode';
import { applyColorMode, resolveColorMode } from '@/utils/colorMode';

export function useColorModeSwitcher() {
  const { preference, resolved, setPreference } = useColorMode();
  const committedPreferenceRef = useRef<ColorModePreference>(preference);

  const onOpenChange = ({ open }: { open: boolean }) => {
    if (!open) applyColorMode(resolveColorMode(committedPreferenceRef.current));
  };

  const onHighlightChange = ({ highlightedValue }: { highlightedValue: string | null }) => {
    if (highlightedValue) {
      applyColorMode(resolveColorMode(highlightedValue as ColorModePreference));
    } else {
      applyColorMode(resolveColorMode(committedPreferenceRef.current));
    }
  };

  return {
    preference,
    resolved,
    setPreference,
    committedPreferenceRef,
    onOpenChange,
    onHighlightChange,
  };
}
