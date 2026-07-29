import { PageHeader } from '@/components/PageHeader';
import { Trainers } from '@/components/Trainers';
import { requireTemplateConfig } from '@/lib/templates';

export default async function TrainersPage({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params;
  const config = requireTemplateConfig(template);

  return (
    <>
      <PageHeader
        eyebrow="Our Team"
        title="Meet the coaches"
        description="Certified, hands-on, and genuinely invested in your progress — not just running the clock."
      />
      <Trainers trainers={config.trainers} />
    </>
  );
}
