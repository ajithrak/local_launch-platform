'use client';

import { useEffect, useMemo, type ReactNode } from 'react';
import { themeToCssVariables } from './cssVariables';
import { ThemeContext } from './themeContext';
import { THEMES } from './registry';
import type { ThemeKey } from './types';

interface ThemeProviderProps {
  themeKey: ThemeKey;
  children: ReactNode;
  className?: string;
}

/**
 * Injects the active theme's tokens as CSS custom properties and loads that
 * theme's Google Fonts on demand — only the two font families the active
 * theme actually uses, not all themes' fonts up front.
 */
export function ThemeProvider({ themeKey, children, className }: ThemeProviderProps) {
  const theme = THEMES[themeKey];
  const cssVars = useMemo(() => themeToCssVariables(theme), [theme]);

  useEffect(() => {
    const linkId = 'll-theme-font';
    let link = document.getElementById(linkId) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    link.href = theme.googleFontsHref;
  }, [theme.googleFontsHref]);

  return (
    <ThemeContext.Provider value={theme}>
      <div
        style={{
          ...cssVars,
          backgroundColor: 'var(--color-background)',
          color: 'var(--color-foreground)',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}
        className={className}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
