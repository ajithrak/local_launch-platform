import type { GymSiteConfig } from '@locallaunch/config-schema';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { MembershipPreview } from '../components/MembershipPreview';
import { Trainers } from '../components/Trainers';
import { ProgramsList } from '../components/ProgramsList';
import { Transformations } from '../components/Transformations';
import { Testimonial } from '../components/Testimonial';
import { GoogleReviews } from '../components/GoogleReviews';
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

export function HomePageContent({ config }: { config: GymSiteConfig }) {
  return (
    <>
      <Hero hero={config.hero} gallery={config.gallery} stats={config.stats} />
      <Stats stats={config.stats} />
      <WhyChooseUs items={config.whyChooseUs} />
      <MembershipPreview plans={config.plans} />

      <div style={{ backgroundColor: 'var(--color-surface-alt)' }} className="pt-16">
        <SectionHeading>Featured Trainers</SectionHeading>
        <Trainers trainers={config.trainers.slice(0, 3)} />
      </div>

      <div className="pt-16">
        <SectionHeading>Popular Programs</SectionHeading>
        <ProgramsList programs={config.programs.slice(0, 4)} compact />
      </div>

      <Transformations transformations={config.transformations} />
      {config.testimonials[0] && <Testimonial testimonial={config.testimonials[0]} />}
      {config.googleReviews && <GoogleReviews reviews={config.googleReviews} business={config.business} />}
      <LocationSection business={config.business} />
      <HomeCta />
    </>
  );
}
