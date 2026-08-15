import { HomePageContent } from '@locallaunch/healthcare-kit';
import { config } from '@/lib/config';

export default function Home() {
  return <HomePageContent config={config} />;
}
