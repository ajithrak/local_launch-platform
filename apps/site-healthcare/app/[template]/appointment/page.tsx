import { AppointmentPageContent } from '@locallaunch/healthcare-kit';
import { APP_BASE_PATH } from '@/lib/basePath';
import { requireTemplateConfig } from '@/lib/templates';

export default async function AppointmentPage({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params;
  const config = requireTemplateConfig(template);

  return <AppointmentPageContent config={config} apiBasePath={APP_BASE_PATH} />;
}
