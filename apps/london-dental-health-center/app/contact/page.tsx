import { ContactPageContent } from '@locallaunch/healthcare-kit';
import { config } from '@/lib/config';

export default function ContactPage() {
  return <ContactPageContent business={config.business} emergencyPhone={config.emergencyPhone} />;
}
