import { notFound } from 'next/navigation';
import { DoctorDetailPageContent } from '@locallaunch/healthcare-kit';
import { config } from '@/lib/config';

export function generateStaticParams() {
  return config.doctors.map((doctor) => ({ slug: doctor.slug }));
}

export default async function DoctorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!config.doctors.some((d) => d.slug === slug)) {
    notFound();
  }

  return <DoctorDetailPageContent config={config} doctorSlug={slug} />;
}
