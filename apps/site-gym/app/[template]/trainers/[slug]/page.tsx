import { notFound } from 'next/navigation';
import { TrainerDetailPageContent } from '@locallaunch/gym-kit';
import { isTemplateSlug, requireTemplateConfig } from '@/lib/templates';

export function generateStaticParams({ params }: { params: { template: string } }) {
  if (!isTemplateSlug(params.template)) return [];
  return requireTemplateConfig(params.template).trainers.map((trainer) => ({ slug: trainer.slug }));
}

export default async function TrainerPage({
  params,
}: {
  params: Promise<{ template: string; slug: string }>;
}) {
  const { template, slug } = await params;
  const config = requireTemplateConfig(template);
  const trainer = config.trainers.find((t) => t.slug === slug);

  if (!trainer) {
    notFound();
  }

  return <TrainerDetailPageContent trainer={trainer} />;
}
