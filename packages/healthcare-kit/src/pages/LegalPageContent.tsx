import type { LegalPage as LegalPageConfig } from '@locallaunch/config-schema';
import { LegalPage } from '../components/LegalPage';
import { PageHeader } from '../components/PageHeader';

export function LegalPageContent({ legal }: { legal: LegalPageConfig }) {
  return (
    <>
      <PageHeader title={legal.title} />
      <LegalPage legal={legal} />
    </>
  );
}
