import { ContactSection } from '@/components/ContactSection';
import { PageHeader } from '@/components/PageHeader';
import { requireTemplateConfig } from '@/lib/templates';

export default async function ContactPage({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params;
  const config = requireTemplateConfig(template);

  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Come train with us"
        description="Questions about plans, schedules, or just want to drop by? We're around all week."
      />
      <ContactSection business={config.business} />
    </>
  );
}
