import type { HealthcareSiteConfig } from '@locallaunch/config-schema';
import { PageHeader } from '../components/PageHeader';
import { TestimonialsList } from '../components/TestimonialsList';

export function TestimonialsPageContent({ config }: { config: HealthcareSiteConfig }) {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="What Patients Say"
        description="Real experiences from patients treated here."
      />
      <TestimonialsList testimonials={config.testimonials} />
    </>
  );
}
