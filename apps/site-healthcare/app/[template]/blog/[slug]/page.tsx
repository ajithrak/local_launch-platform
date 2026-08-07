import { notFound } from 'next/navigation';
import { BlogPostPageContent } from '@locallaunch/healthcare-kit';
import { isTemplateSlug, requireTemplateConfig } from '@/lib/templates';

export function generateStaticParams({ params }: { params: { template: string } }) {
  if (!isTemplateSlug(params.template)) return [];
  return requireTemplateConfig(params.template).blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ template: string; slug: string }>;
}) {
  const { template, slug } = await params;
  const config = requireTemplateConfig(template);
  const post = config.blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogPostPageContent post={post} />;
}
