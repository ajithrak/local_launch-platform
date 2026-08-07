import type { HealthcareSiteConfig } from '@locallaunch/config-schema';
import { AppointmentForm } from '../components/AppointmentForm';
import { PageHeader } from '../components/PageHeader';

export function AppointmentPageContent({ config, apiBasePath }: { config: HealthcareSiteConfig; apiBasePath?: string }) {
  return (
    <>
      <PageHeader
        eyebrow="Appointment"
        title="Book Your Visit"
        description="Fill out the form below, or reach us directly by phone or WhatsApp — whichever is easier for you."
      />
      <AppointmentForm
        business={config.business}
        doctors={config.doctors}
        departments={config.departments}
        emergencyPhone={config.emergencyPhone}
        apiBasePath={apiBasePath}
      />
    </>
  );
}
