import { notFound } from 'next/navigation';
import { DoctorDetailPageContent } from '@locallaunch/healthcare-kit';
import { APP_BASE_PATH } from '@/lib/basePath';
import { isTemplateSlug, requireTemplateConfig } from '@/lib/templates';

export function generateStaticParams({ params }: { params: { template: string } }) {
  if (!isTemplateSlug(params.template)) return [];
  return requireTemplateConfig(params.template).doctors.map((doctor) => ({ slug: doctor.slug }));
}

export default async function DoctorPage({
  params,
}: {
  params: Promise<{ template: string; slug: string }>;
}) {
  const { template, slug } = await params;
  const config = requireTemplateConfig(template);

  if (!config.doctors.some((d) => d.slug === slug)) {
    notFound();
  }

  return <DoctorDetailPageContent config={config} doctorSlug={slug} apiBasePath={APP_BASE_PATH} />;
}
