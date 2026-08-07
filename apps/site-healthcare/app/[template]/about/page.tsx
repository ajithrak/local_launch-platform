import { AboutPageContent } from '@locallaunch/healthcare-kit';
import { requireTemplateConfig } from '@/lib/templates';

export default async function AboutPage({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params;
  const config = requireTemplateConfig(template);

  return <AboutPageContent config={config} />;
}
