import { LegalPage } from '@/components/LegalPage';
import { PageHeader } from '@/components/PageHeader';
import { requireTemplateConfig } from '@/lib/templates';

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params;
  const config = requireTemplateConfig(template);

  return (
    <>
      <PageHeader title={config.privacyPolicy.title} />
      <LegalPage legal={config.privacyPolicy} />
    </>
  );
}
