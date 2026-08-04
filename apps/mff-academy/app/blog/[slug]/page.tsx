import { notFound } from 'next/navigation';
import { BlogPostPageContent } from '@locallaunch/gym-kit';
import { config } from '@/lib/config';

export function generateStaticParams() {
  return config.blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = config.blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogPostPageContent post={post} />;
}
