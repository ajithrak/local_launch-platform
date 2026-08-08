import { notFound } from 'next/navigation';
import { ServiceDetailPageContent } from '@locallaunch/healthcare-kit';
import { config } from '@/lib/config';

export function generateStaticParams() {
  return config.services.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!config.services.some((s) => s.slug === slug)) {
    notFound();
  }

  return <ServiceDetailPageContent config={config} serviceSlug={slug} />;
}
