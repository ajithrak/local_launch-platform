'use client';

import { ThemeProvider, type ThemeKey } from '@locallaunch/theme-engine';
import type { BusinessInfo } from '@locallaunch/config-schema';
import { useState, type ReactNode } from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { CallNowButton } from './CallNowButton';
import { AssetBasePathProvider, TemplateBasePathProvider } from './TemplateBasePath';

interface ClinicShellProps {
  business: BusinessInfo;
  defaultTheme: ThemeKey;
  /** e.g. "/mednova" — every internal link within this template is built relative to this. */
  basePath: string;
  /** e.g. "/clinic" — Next's basePath config, when set. Empty for single-client apps. */
  assetBasePath?: string;
  emergencyPhone?: string;
  children: ReactNode;
}

/**
 * Lives in the [template] layout so theme state, nav, and footer persist
 * across client-side page navigation within one template — only `children`
 * (the active route's page) swaps out.
 */
export function ClinicShell({
  business,
  defaultTheme,
  basePath,
  assetBasePath = '',
  emergencyPhone,
  children,
}: ClinicShellProps) {
  const [themeKey] = useState<ThemeKey>(defaultTheme);

  return (
    <AssetBasePathProvider assetBasePath={assetBasePath}>
      <TemplateBasePathProvider basePath={basePath}>
        <ThemeProvider themeKey={themeKey} className="flex min-h-screen flex-col">
          <Nav business={business} />
          <main className="flex-1">{children}</main>
          <Footer business={business} emergencyPhone={emergencyPhone} />
          <WhatsAppButton whatsapp={business.whatsapp} />
          <CallNowButton phone={business.phone} />
        </ThemeProvider>
      </TemplateBasePathProvider>
    </AssetBasePathProvider>
  );
}
