import { ServicesListPageContent } from '@locallaunch/healthcare-kit';
import { config } from '@/lib/config';

export default function ServicesPage() {
  return <ServicesListPageContent config={config} />;
}
