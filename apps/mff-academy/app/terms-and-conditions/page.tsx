import { LegalPageContent } from '@locallaunch/gym-kit';
import { config } from '@/lib/config';

export default function TermsPage() {
  return <LegalPageContent legal={config.termsAndConditions} />;
}
