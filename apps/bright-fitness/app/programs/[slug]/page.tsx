import { notFound } from 'next/navigation';
import { ProgramDetailPageContent } from '@locallaunch/gym-kit';
import { config } from '@/lib/config';

export function generateStaticParams() {
  return config.programs.map((program) => ({ slug: program.slug }));
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = config.programs.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  return <ProgramDetailPageContent program={program} />;
}
