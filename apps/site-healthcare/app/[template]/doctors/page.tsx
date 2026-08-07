import { DoctorsListPageContent } from '@locallaunch/healthcare-kit';
import { requireTemplateConfig } from '@/lib/templates';

export default async function DoctorsPage({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params;
  const config = requireTemplateConfig(template);

  return <DoctorsListPageContent config={config} />;
}
