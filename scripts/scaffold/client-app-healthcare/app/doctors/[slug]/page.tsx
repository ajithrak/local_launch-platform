import { notFound } from 'next/navigation';
import { DoctorDetailPageContent } from '@locallaunch/healthcare-kit';
import { config } from '@/lib/config';

export function generateStaticParams() {
  return config.doctors.map((doctor) => ({ slug: doctor.slug }));
}

export default function DoctorPage({ params }: { params: { slug: string } }) {
  if (!config.doctors.some((d) => d.slug === params.slug)) {
    notFound();
  }

  return <DoctorDetailPageContent config={config} doctorSlug={params.slug} />;
}
