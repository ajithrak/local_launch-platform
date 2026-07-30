'use client';

import { Card } from '@locallaunch/ui';
import Link from 'next/link';
import type { BlogPost } from '@locallaunch/config-schema';
import { useTemplateBasePath } from './TemplateBasePath';

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const basePath = useTemplateBasePath();

  return (
    <section className="grid grid-cols-1 gap-6 px-6 pb-16 md:grid-cols-2 md:px-10">
      {posts.map((post) => (
        <Link key={post.slug} href={`${basePath}/blog/${post.slug}`}>
          <Card className="h-full transition hover:-translate-y-1">
            <p className="mb-2 text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              {post.date} · {post.author}
            </p>
            <h2 className="mb-2 text-lg font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
              {post.title}
            </h2>
            <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              {post.excerpt}
            </p>
          </Card>
        </Link>
      ))}
    </section>
  );
}
