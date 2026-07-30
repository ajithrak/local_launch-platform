import type { Program } from '@locallaunch/config-schema';
import { PageHeader } from '../components/PageHeader';
import { ProgramDetail } from '../components/ProgramDetail';

export function ProgramDetailPageContent({ program }: { program: Program }) {
  return (
    <>
      <PageHeader eyebrow="Program" title={program.name} description={program.tagline} />
      <ProgramDetail program={program} />
    </>
  );
}
