import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ClinicShell } from '@locallaunch/healthcare-kit';
import { config } from '@/lib/config';
import './globals.css';

export const metadata: Metadata = {
  title: config.seo.title,
  description: config.seo.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClinicShell business={config.business} defaultTheme={config.theme} basePath="" emergencyPhone={config.emergencyPhone}>
          {children}
        </ClinicShell>
      </body>
    </html>
  );
}
