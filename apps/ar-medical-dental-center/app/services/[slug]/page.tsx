import { notFound } from 'next/navigation';
import { ServiceDetailPageContent } from '@locallaunch/healthcare-kit';
import { config } from '@/lib/config';

export function generateStaticParams() {
  return config.services.map((service) => ({ slug: service.slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  if (!config.services.some((s) => s.slug === params.slug)) {
    notFound();
  }

  return <ServiceDetailPageContent config={config} serviceSlug={params.slug} />;
}
