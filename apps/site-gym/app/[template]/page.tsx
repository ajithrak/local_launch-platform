import { HomePageContent } from '@locallaunch/gym-kit';
import { requireTemplateConfig } from '@/lib/templates';

export default async function Home({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params;
  const config = requireTemplateConfig(template);

  return <HomePageContent config={config} />;
}
