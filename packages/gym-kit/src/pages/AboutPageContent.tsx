import type { GymSiteConfig } from '@locallaunch/config-schema';
import { About } from '../components/About';
import { PageHeader } from '../components/PageHeader';

export function AboutPageContent({ config }: { config: GymSiteConfig }) {
  return (
    <>
      <PageHeader eyebrow="Our Story" title={config.about.title} />
      <About about={config.about} />
    </>
  );
}
