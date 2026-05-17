export type ColorModePreference = 'light' | 'dark' | 'system';
export type ResolvedColorMode = 'light' | 'dark';

export const COLOR_MODE_KEY = 'color-mode';
export const COLOR_MODE_ATTR = 'data-color-mode';
export const COLOR_MODE_EVENT = 'color-mode-change';

export function getSystemColorMode(): ResolvedColorMode {
  if (typeof window === 'undefined') return 'light';

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function resolveColorMode(pref: ColorModePreference): ResolvedColorMode {
  return pref === 'system' ? getSystemColorMode() : pref;
}

export function readPreference(): ColorModePreference {
  try {
    const stored = localStorage.getItem(COLOR_MODE_KEY);
    if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
  } catch {}

  return 'system';
}

export function savePreference(pref: ColorModePreference): void {
  try {
    localStorage.setItem(COLOR_MODE_KEY, pref);
  } catch {}
}

export function applyColorMode(resolved: ResolvedColorMode): void {
  document.documentElement.setAttribute(COLOR_MODE_ATTR, resolved);
}

export const COLOR_MODE_INIT_SCRIPT = `(function(){try{var p=localStorage.getItem('color-mode')||'system';var r=p==='system'?(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):p;document.documentElement.setAttribute('data-color-mode',r);}catch(_){}})();`;
