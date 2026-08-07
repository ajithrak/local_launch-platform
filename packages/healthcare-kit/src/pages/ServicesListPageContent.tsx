import type { HealthcareSiteConfig } from '@locallaunch/config-schema';
import { ServicesGrid } from '../components/ServicesGrid';
import { PageHeader } from '../components/PageHeader';

export function ServicesListPageContent({ config }: { config: HealthcareSiteConfig }) {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Treatments & Services"
        description="Every service below has its own detail page covering symptoms, procedure, benefits, and recovery."
      />
      <ServicesGrid services={config.services} />
    </>
  );
}
