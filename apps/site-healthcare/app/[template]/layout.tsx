import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ClinicShell } from '@locallaunch/healthcare-kit';
import { TEMPLATE_SLUGS, requireTemplateConfig } from '@/lib/templates';
import { APP_BASE_PATH } from '@/lib/basePath';

export function generateStaticParams() {
  return TEMPLATE_SLUGS.map((template) => ({ template }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ template: string }>;
}): Promise<Metadata> {
  const { template } = await params;
  const config = requireTemplateConfig(template);
  return { title: config.seo.title, description: config.seo.description };
}

export default async function TemplateLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ template: string }>;
}) {
  const { template } = await params;
  const config = requireTemplateConfig(template);

  return (
    <ClinicShell
      business={config.business}
      defaultTheme={config.theme}
      basePath={`/${template}`}
      assetBasePath={APP_BASE_PATH}
      emergencyPhone={config.emergencyPhone}
    >
      {children}
    </ClinicShell>
  );
}
