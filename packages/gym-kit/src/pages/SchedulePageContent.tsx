import type { GymSiteConfig } from '@locallaunch/config-schema';
import { PageHeader } from '../components/PageHeader';
import { ScheduleTable } from '../components/ScheduleTable';

export function SchedulePageContent({ config }: { config: GymSiteConfig }) {
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
