import type { GymSiteConfig } from '@locallaunch/config-schema';
import { PageHeader } from '../components/PageHeader';
import { ProgramsList } from '../components/ProgramsList';

export function ProgramsListPageContent({ config }: { config: GymSiteConfig }) {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title="Structured programs, not just gym access"
        description="Pick a program built around a specific goal, coached by someone who checks in every week."
      />
      <ProgramsList programs={config.programs} />
    </>
  );
}
