import { TrainersListPageContent } from '@locallaunch/gym-kit';
import { requireTemplateConfig } from '@/lib/templates';

export default async function TrainersPage({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params;
  const config = requireTemplateConfig(template);

  return <TrainersListPageContent config={config} />;
}
