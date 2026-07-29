import { darkTheme } from './themes/dark';
import { goldTheme } from './themes/gold';
import { minimalTheme } from './themes/minimal';
import { orangeTheme } from './themes/orange';
import { neonTheme } from './themes/neon';
import type { ThemeKey, ThemeTokens } from './types';

export const THEMES: Record<ThemeKey, ThemeTokens> = {
  dark: darkTheme,
  gold: goldTheme,
  minimal: minimalTheme,
  orange: orangeTheme,
  neon: neonTheme,
};

export const THEME_KEYS = Object.keys(THEMES) as ThemeKey[];
