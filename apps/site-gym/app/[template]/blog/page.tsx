import { BlogList } from '@/components/BlogList';
import { PageHeader } from '@/components/PageHeader';
import { requireTemplateConfig } from '@/lib/templates';

export default async function BlogPage({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params;
  const config = requireTemplateConfig(template);

  return (
    <>
      <PageHeader eyebrow="Blog" title="Training notes" description="Coaching advice from our team, no fads." />
      <BlogList posts={config.blogPosts} />
    </>
  );
}
