import { GalleryPageContent } from '@locallaunch/gym-kit';
import { requireTemplateConfig } from '@/lib/templates';

export default async function GalleryPage({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params;
  const config = requireTemplateConfig(template);

  return <GalleryPageContent config={config} />;
}
