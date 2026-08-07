import { ContactPageContent } from '@locallaunch/healthcare-kit';
import { requireTemplateConfig } from '@/lib/templates';

export default async function ContactPage({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params;
  const config = requireTemplateConfig(template);

  return <ContactPageContent business={config.business} emergencyPhone={config.emergencyPhone} />;
}
