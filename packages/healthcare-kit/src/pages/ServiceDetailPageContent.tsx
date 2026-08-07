import type { HealthcareSiteConfig } from '@locallaunch/config-schema';
import { ServiceDetail } from '../components/ServiceDetail';
import { PageHeader } from '../components/PageHeader';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function ServiceDetailPageContent({ config, serviceSlug }: { config: HealthcareSiteConfig; serviceSlug: string }) {
  const service = config.services.find((s) => s.slug === serviceSlug);
  if (!service) return null;

  const relatedServices = config.services.filter((s) => service.relatedServiceSlugs.includes(s.slug));

  return (
    <>
      <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: service.name }]} />
      <PageHeader title={service.name} />
      <ServiceDetail service={service} relatedServices={relatedServices} />
    </>
  );
}
