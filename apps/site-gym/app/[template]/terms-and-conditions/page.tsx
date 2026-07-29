import { LegalPage } from '@/components/LegalPage';
import { PageHeader } from '@/components/PageHeader';
import { requireTemplateConfig } from '@/lib/templates';

export default async function TermsPage({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params;
  const config = requireTemplateConfig(template);

  return (
    <>
      <PageHeader title={config.termsAndConditions.title} />
      <LegalPage legal={config.termsAndConditions} />
    </>
  );
}
