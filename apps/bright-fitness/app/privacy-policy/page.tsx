import { LegalPageContent } from '@locallaunch/gym-kit';
import { config } from '@/lib/config';

export default function PrivacyPolicyPage() {
  return <LegalPageContent legal={config.privacyPolicy} />;
}
