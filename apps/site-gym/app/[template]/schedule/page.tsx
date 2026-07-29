import { PageHeader } from '@/components/PageHeader';
import { ScheduleTable } from '@/components/ScheduleTable';
import { requireTemplateConfig } from '@/lib/templates';

export default async function SchedulePage({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params;
  const config = requireTemplateConfig(template);

  return (
    <>
      <PageHeader
        eyebrow="Class Schedule"
        title="Find your next session"
        description="Filter by day to see what's running and who's coaching it this week."
      />
      <ScheduleTable schedule={config.classSchedule} />
    </>
  );
}
