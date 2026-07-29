import { About } from '@/components/About';
import { PageHeader } from '@/components/PageHeader';
import { requireTemplateConfig } from '@/lib/templates';

export default async function AboutPage({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params;
  const config = requireTemplateConfig(template);

  return (
    <>
      <PageHeader eyebrow="Our Story" title={config.about.title} />
      <About about={config.about} />
    </>
  );
}
