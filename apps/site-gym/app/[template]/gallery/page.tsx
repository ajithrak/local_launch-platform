import { Gallery } from '@/components/Gallery';
import { PageHeader } from '@/components/PageHeader';
import { requireTemplateConfig } from '@/lib/templates';

export default async function GalleryPage({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params;
  const config = requireTemplateConfig(template);

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
