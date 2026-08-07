import type { HealthcareSiteConfig } from '@locallaunch/config-schema';
import { DoctorDetail } from '../components/DoctorDetail';
import { AppointmentForm } from '../components/AppointmentForm';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function DoctorDetailPageContent({
  config,
  doctorSlug,
  apiBasePath,
}: {
  config: HealthcareSiteConfig;
  doctorSlug: string;
  apiBasePath?: string;
}) {
  const doctor = config.doctors.find((d) => d.slug === doctorSlug);
  if (!doctor) return null;

  return (
    <>
      <Breadcrumbs items={[{ label: 'Doctors', href: '/doctors' }, { label: doctor.name }]} />
      <DoctorDetail doctor={doctor} />
      <AppointmentForm
        business={config.business}
        doctors={config.doctors}
        departments={config.departments}
        emergencyPhone={config.emergencyPhone}
        preselectedDoctorSlug={doctor.slug}
        apiBasePath={apiBasePath}
      />
    </>
  );
}
