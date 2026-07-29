import { useContext } from 'react';
import { ThemeContext } from './themeContext';
import type { ThemeTokens } from './types';

export function useTheme(): ThemeTokens {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('useTheme() must be used within a <ThemeProvider>');
  }
  return theme;
}
