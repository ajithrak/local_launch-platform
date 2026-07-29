import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { GymShell } from '@/components/GymShell';
import { TEMPLATE_SLUGS, requireTemplateConfig } from '@/lib/templates';

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
    <GymShell business={config.business} defaultTheme={config.theme} basePath={`/${template}`} showThemeSwitcher={false}>
      {children}
    </GymShell>
  );
}
