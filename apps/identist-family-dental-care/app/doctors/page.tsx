import { DoctorsListPageContent } from '@locallaunch/healthcare-kit';
import { config } from '@/lib/config';

export default function DoctorsPage() {
  return <DoctorsListPageContent config={config} />;
}
