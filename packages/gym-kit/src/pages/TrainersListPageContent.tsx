import type { GymSiteConfig } from '@locallaunch/config-schema';
import { PageHeader } from '../components/PageHeader';
import { Trainers } from '../components/Trainers';

export function TrainersListPageContent({ config }: { config: GymSiteConfig }) {
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
