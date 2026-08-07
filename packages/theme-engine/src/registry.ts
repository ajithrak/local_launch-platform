import { darkTheme } from './themes/dark';
import { goldTheme } from './themes/gold';
import { minimalTheme } from './themes/minimal';
import { orangeTheme } from './themes/orange';
import { neonTheme } from './themes/neon';
import { mednovaTheme } from './themes/mednova';
import { careplusTheme } from './themes/careplus';
import { orthoedgeTheme } from './themes/orthoedge';
import { smilecraftTheme } from './themes/smilecraft';
import { mothercareTheme } from './themes/mothercare';
import type { ThemeKey, ThemeTokens } from './types';

export const THEMES: Record<ThemeKey, ThemeTokens> = {
  dark: darkTheme,
  gold: goldTheme,
  minimal: minimalTheme,
  orange: orangeTheme,
  neon: neonTheme,
  mednova: mednovaTheme,
  careplus: careplusTheme,
  orthoedge: orthoedgeTheme,
  smilecraft: smilecraftTheme,
  mothercare: mothercareTheme,
};

export const THEME_KEYS = Object.keys(THEMES) as ThemeKey[];
