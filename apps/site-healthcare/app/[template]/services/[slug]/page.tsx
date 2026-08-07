import { notFound } from 'next/navigation';
import { ServiceDetailPageContent } from '@locallaunch/healthcare-kit';
import { isTemplateSlug, requireTemplateConfig } from '@/lib/templates';

export function generateStaticParams({ params }: { params: { template: string } }) {
  if (!isTemplateSlug(params.template)) return [];
  return requireTemplateConfig(params.template).services.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ template: string; slug: string }>;
}) {
  const { template, slug } = await params;
  const config = requireTemplateConfig(template);

  if (!config.services.some((s) => s.slug === slug)) {
    notFound();
  }

  return <ServiceDetailPageContent config={config} serviceSlug={slug} />;
}
