import { ContactPageContent } from '@locallaunch/gym-kit';
import { config } from '@/lib/config';

export default function ContactPage() {
  return <ContactPageContent business={config.business} />;
}
