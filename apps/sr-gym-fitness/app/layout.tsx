import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { GymShell } from '@locallaunch/gym-kit';
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
        <GymShell business={config.business} defaultTheme={config.theme} basePath="" showThemeSwitcher={false}>
          {children}
        </GymShell>
      </body>
    </html>
  );
}
