import type { HealthcareSiteConfig } from '@locallaunch/config-schema';
import { Hero } from '../components/Hero';
import { Statistics } from '../components/Statistics';
import { DoctorHighlight } from '../components/DoctorHighlight';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ServicesGrid } from '../components/ServicesGrid';
import { Gallery } from '../components/Gallery';
import { InsurancePartners } from '../components/InsurancePartners';
import { GoogleReviews } from '../components/GoogleReviews';
import { Testimonial } from '../components/Testimonial';
import { Faq } from '../components/Faq';
import { LocationSection } from '../components/LocationSection';
import { HomeCta } from '../components/HomeCta';

function SectionHeading({ children }: { children: string }) {
  return (
    <h2
      className="mb-10 px-6 text-center text-3xl md:px-10"
      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}
    >
      {children}
    </h2>
  );
}

export function HomePageContent({ config }: { config: HealthcareSiteConfig }) {
  return (
    <>
      <Hero hero={config.hero} gallery={config.gallery} stats={config.stats} />
      {config.doctors[0] && <DoctorHighlight doctor={config.doctors[0]} />}
      <Statistics stats={config.stats} />
      <WhyChooseUs items={config.whyChooseUs} />

      <div style={{ backgroundColor: 'var(--color-surface-alt)' }} className="pt-16">
        <SectionHeading>Featured Services</SectionHeading>
        <ServicesGrid services={config.services.slice(0, 3)} compact />
      </div>

      <HomeCta />

      {config.testimonials[0] && <Testimonial testimonial={config.testimonials[0]} />}
      {config.googleReviews && <GoogleReviews reviews={config.googleReviews} business={config.business} />}

      {config.gallery.length > 0 && (
        <div className="pt-16">
          <SectionHeading>Inside the Clinic</SectionHeading>
          <Gallery images={config.gallery} limit={3} />
        </div>
      )}

      <InsurancePartners partners={config.insurancePartners} />
      <Faq faqs={config.faqs} />
      <LocationSection business={config.business} />
    </>
  );
}
