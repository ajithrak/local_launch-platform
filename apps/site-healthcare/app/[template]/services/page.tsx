import { ServicesListPageContent } from '@locallaunch/healthcare-kit';
import { requireTemplateConfig } from '@/lib/templates';

export default async function ServicesPage({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params;
  const config = requireTemplateConfig(template);

  return <ServicesListPageContent config={config} />;
}
