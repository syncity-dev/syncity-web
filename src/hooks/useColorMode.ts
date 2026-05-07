import { useCallback, useEffect, useState } from "react";
import {
  COLOR_MODE_EVENT,
  type ColorModePreference,
  type ResolvedColorMode,
  applyColorMode,
  getSystemColorMode,
  readPreference,
  resolveColorMode,
  savePreference,
} from "@/utils/colorMode";

export function useColorMode() {
  const [preference, setPreferenceState] =
    useState<ColorModePreference>("system");
  const [resolved, setResolved] = useState<ResolvedColorMode>("light");

  useEffect(() => {
    const pref = readPreference();
    setPreferenceState(pref);
    setResolved(resolveColorMode(pref));
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (preference === "system") {
        const sys = getSystemColorMode();
        setResolved(sys);
        applyColorMode(sys);
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [preference]);

  useEffect(() => {
    const handler = (e: Event) => {
      const pref = (e as CustomEvent<ColorModePreference>).detail;
      setPreferenceState(pref);
      setResolved(resolveColorMode(pref));
    };
    window.addEventListener(COLOR_MODE_EVENT, handler);
    return () => window.removeEventListener(COLOR_MODE_EVENT, handler);
  }, []);

  const setPreference = useCallback((pref: ColorModePreference) => {
    const next = resolveColorMode(pref);
    setPreferenceState(pref);
    setResolved(next);
    savePreference(pref);
    applyColorMode(next);
    window.dispatchEvent(
      new CustomEvent<ColorModePreference>(COLOR_MODE_EVENT, { detail: pref }),
    );
  }, []);

  return { preference, resolved, setPreference };
}
