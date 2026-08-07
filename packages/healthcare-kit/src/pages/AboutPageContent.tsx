import type { HealthcareSiteConfig } from '@locallaunch/config-schema';
import { About } from '../components/About';
import { PageHeader } from '../components/PageHeader';

export function AboutPageContent({ config }: { config: HealthcareSiteConfig }) {
  return (
    <>
      <PageHeader eyebrow="Our Story" title={config.about.title} />
      <About about={config.about} />
    </>
  );
}
