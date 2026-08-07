import { BlogListPageContent } from '@locallaunch/healthcare-kit';
import { requireTemplateConfig } from '@/lib/templates';

export default async function BlogPage({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params;
  const config = requireTemplateConfig(template);

  return <BlogListPageContent config={config} />;
}
