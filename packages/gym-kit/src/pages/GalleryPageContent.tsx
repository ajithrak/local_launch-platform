import type { GymSiteConfig } from '@locallaunch/config-schema';
import { Gallery } from '../components/Gallery';
import { PageHeader } from '../components/PageHeader';

export function GalleryPageContent({ config }: { config: GymSiteConfig }) {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title={`Inside ${config.business.name}`}
        description="A look at the floor, the classes, and the people who show up for them."
      />
      <Gallery images={config.gallery} />
    </>
  );
}
