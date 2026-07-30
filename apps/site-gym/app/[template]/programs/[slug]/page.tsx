import { notFound } from 'next/navigation';
import { ProgramDetailPageContent } from '@locallaunch/gym-kit';
import { isTemplateSlug, requireTemplateConfig } from '@/lib/templates';

export function generateStaticParams({ params }: { params: { template: string } }) {
  if (!isTemplateSlug(params.template)) return [];
  return requireTemplateConfig(params.template).programs.map((program) => ({ slug: program.slug }));
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ template: string; slug: string }>;
}) {
  const { template, slug } = await params;
  const config = requireTemplateConfig(template);
  const program = config.programs.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  return <ProgramDetailPageContent program={program} />;
}
