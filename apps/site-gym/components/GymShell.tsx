'use client';

import { ThemeProvider, type ThemeKey } from '@locallaunch/theme-engine';
import type { BusinessInfo } from '@locallaunch/config-schema';
import { useState, type ReactNode } from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { CallNowButton } from './CallNowButton';
import { ThemeSwitcher } from './ThemeSwitcher';
import { TemplateBasePathProvider } from './TemplateBasePath';

interface GymShellProps {
  business: BusinessInfo;
  defaultTheme: ThemeKey;
  /** e.g. "/titan" — every internal link within this template is built relative to this. */
  basePath: string;
  showThemeSwitcher?: boolean;
  children: ReactNode;
}

/**
 * Lives in the [template] layout so theme state, nav, and footer persist
 * across client-side page navigation within one template — only `children`
 * (the active route's page) swaps out.
 */
export function GymShell({ business, defaultTheme, basePath, showThemeSwitcher = true, children }: GymShellProps) {
  const [themeKey, setThemeKey] = useState<ThemeKey>(defaultTheme);

  return (
    <TemplateBasePathProvider basePath={basePath}>
      {showThemeSwitcher && <ThemeSwitcher active={themeKey} onChange={setThemeKey} />}

      <ThemeProvider themeKey={themeKey} className="flex min-h-screen flex-col">
        <Nav business={business} />
        <main className="flex-1">{children}</main>
        <Footer business={business} />
        <WhatsAppButton whatsapp={business.whatsapp} />
        <CallNowButton phone={business.phone} />
      </ThemeProvider>
    </TemplateBasePathProvider>
  );
}
