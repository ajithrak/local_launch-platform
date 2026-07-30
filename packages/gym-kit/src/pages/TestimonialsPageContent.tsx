import type { GymSiteConfig } from '@locallaunch/config-schema';
import { PageHeader } from '../components/PageHeader';
import { TestimonialsList } from '../components/TestimonialsList';

export function TestimonialsPageContent({ config }: { config: GymSiteConfig }) {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="What members say"
        description="Real results from people training here week to week."
      />
      <TestimonialsList testimonials={config.testimonials} />
    </>
  );
}
