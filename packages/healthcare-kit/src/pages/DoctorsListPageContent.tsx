import type { HealthcareSiteConfig } from '@locallaunch/config-schema';
import { Doctors } from '../components/Doctors';
import { PageHeader } from '../components/PageHeader';

export function DoctorsListPageContent({ config }: { config: HealthcareSiteConfig }) {
  return (
    <>
      <PageHeader
        eyebrow="Our Doctors"
        title="Meet the Team"
        description="Every doctor here is board-certified and available for direct booking — no referral required."
      />
      <Doctors doctors={config.doctors} />
    </>
  );
}
