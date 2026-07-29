import { PageHeader } from '@/components/PageHeader';
import { TestimonialsList } from '@/components/TestimonialsList';
import { requireTemplateConfig } from '@/lib/templates';

export default async function TestimonialsPage({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params;
  const config = requireTemplateConfig(template);

  return (
    <>
      <PageHeader eyebrow="Testimonials" title="What members say" description="Real results from people training here week to week." />
      <TestimonialsList testimonials={config.testimonials} />
    </>
  );
}
