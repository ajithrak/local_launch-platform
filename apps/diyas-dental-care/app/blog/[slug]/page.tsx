import { notFound } from 'next/navigation';
import { BlogPostPageContent } from '@locallaunch/healthcare-kit';
import { config } from '@/lib/config';

export function generateStaticParams() {
  return config.blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = config.blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostPageContent post={post} />;
}
