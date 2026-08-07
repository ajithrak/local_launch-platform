import type { HealthcareSiteConfig } from '@locallaunch/config-schema';
import { Gallery } from '../components/Gallery';
import { PageHeader } from '../components/PageHeader';

export function GalleryPageContent({ config }: { config: HealthcareSiteConfig }) {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title={`Inside ${config.business.name}`}
        description="A look at the facility, from the waiting area to the treatment rooms."
      />
      <Gallery images={config.gallery} />
    </>
  );
}
