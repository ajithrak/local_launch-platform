import { MembershipPageContent } from '@locallaunch/gym-kit';
import { requireTemplateConfig } from '@/lib/templates';

export default async function MembershipPage({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params;
  const config = requireTemplateConfig(template);

  return <MembershipPageContent config={config} />;
}
