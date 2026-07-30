import { ContactPageContent } from '@locallaunch/gym-kit';
import { APP_BASE_PATH } from '@/lib/basePath';
import { requireTemplateConfig } from '@/lib/templates';

export default async function ContactPage({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params;
  const config = requireTemplateConfig(template);

  return <ContactPageContent business={config.business} apiBasePath={APP_BASE_PATH} />;
}
