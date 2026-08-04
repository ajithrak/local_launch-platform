import { notFound } from 'next/navigation';
import { TrainerDetailPageContent } from '@locallaunch/gym-kit';
import { config } from '@/lib/config';

export function generateStaticParams() {
  return config.trainers.map((trainer) => ({ slug: trainer.slug }));
}

export default async function TrainerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trainer = config.trainers.find((t) => t.slug === slug);

  if (!trainer) {
    notFound();
  }

  return <TrainerDetailPageContent trainer={trainer} />;
}
