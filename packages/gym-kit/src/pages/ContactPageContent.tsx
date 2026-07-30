import type { BusinessInfo } from '@locallaunch/config-schema';
import { ContactSection } from '../components/ContactSection';
import { PageHeader } from '../components/PageHeader';

export function ContactPageContent({ business, apiBasePath }: { business: BusinessInfo; apiBasePath?: string }) {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Come train with us"
        description="Questions about plans, schedules, or just want to drop by? We're around all week."
      />
      <ContactSection business={business} apiBasePath={apiBasePath} />
    </>
  );
}
