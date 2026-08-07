import type { BusinessInfo } from '@locallaunch/config-schema';
import { ContactDetails } from '../components/ContactDetails';
import { PageHeader } from '../components/PageHeader';

export function ContactPageContent({ business, emergencyPhone }: { business: BusinessInfo; emergencyPhone?: string }) {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Visit or Reach Us"
        description="Have a question before booking? Reach out directly — our team is happy to help."
      />
      <ContactDetails business={business} emergencyPhone={emergencyPhone} />
    </>
  );
}
