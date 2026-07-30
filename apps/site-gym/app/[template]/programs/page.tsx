import { ProgramsListPageContent } from '@locallaunch/gym-kit';
import { requireTemplateConfig } from '@/lib/templates';

export default async function ProgramsPage({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params;
  const config = requireTemplateConfig(template);

  return <ProgramsListPageContent config={config} />;
}
