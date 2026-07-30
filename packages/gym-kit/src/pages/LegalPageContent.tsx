import type { LegalPage as LegalPageConfig } from '@locallaunch/config-schema';
import { LegalPage } from '../components/LegalPage';
import { PageHeader } from '../components/PageHeader';

/** Shared by both the privacy-policy and terms-and-conditions routes — same structure, different content. */
export function LegalPageContent({ legal }: { legal: LegalPageConfig }) {
  return (
    <>
      <PageHeader title={legal.title} />
      <LegalPage legal={legal} />
    </>
  );
}
