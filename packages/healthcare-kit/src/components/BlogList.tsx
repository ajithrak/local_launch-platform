'use client';

import { Card } from '@locallaunch/ui';
import { useTheme } from '@locallaunch/theme-engine';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import type { BlogPost } from '@locallaunch/config-schema';
import { useTemplateBasePath } from './TemplateBasePath';

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const theme = useTheme();
  const basePath = useTemplateBasePath();

  if (theme.key === 'orthoedge') {
    return (
      <section className="mx-auto max-w-3xl px-6 pb-16 md:px-10">
        <div>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`${basePath}/blog/${post.slug}`}
              className="flex items-center justify-between gap-6 border-t py-6 first:pt-0"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div>
                <p className="mb-1 text-xs uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', letterSpacing: 1.5 }}>
                  <Calendar size={11} className="mr-1 inline align-[-1px]" />{post.date} · {post.author}
                </p>
                <h2 className="text-lg font-bold" style={{ fontFamily: 'var(--font-body)' }}>{post.title}</h2>
                <p className="mt-1 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{post.excerpt}</p>
              </div>
              <ArrowRight size={18} className="flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
            </Link>
          ))}
        </div>
      </section>
    );
  }

  if (theme.key === 'careplus') {
    return (
      <section className="grid grid-cols-1 gap-6 px-6 pb-16 md:grid-cols-2 md:px-10">
        {posts.map((post) => (
          <Link key={post.slug} href={`${basePath}/blog/${post.slug}`} className="rounded-[var(--radius-lg)] p-6" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
            <p className="mb-1 text-xs font-semibold" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-secondary)' }}><Calendar size={11} className="mr-1 inline align-[-1px]" />{post.date} · {post.author}</p>
            <h2 className="mb-2 text-lg font-bold" style={{ fontFamily: 'var(--font-body)' }}>{post.title}</h2>
            <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{post.excerpt}</p>
          </Link>
        ))}
      </section>
    );
  }

  if (theme.key === 'smilecraft') {
    return (
      <section className="grid grid-cols-1 gap-4 px-6 pb-16 md:grid-cols-2 md:px-10">
        {posts.map((post) => (
          <Link key={post.slug} href={`${basePath}/blog/${post.slug}`}>
            <div className="h-full rounded-[var(--radius-lg)] p-5" style={{ backgroundColor: 'var(--color-surface)', boxShadow: 'var(--shadow-card)' }}>
              <span className="mb-3 inline-block rounded-full px-2.5 py-0.5 text-[10px] uppercase" style={{ backgroundColor: 'var(--color-surface-alt)', color: 'var(--color-accent)', letterSpacing: 1 }}>{post.date}</span>
              <h2 className="mb-2 font-bold" style={{ fontFamily: 'var(--font-body)', fontSize: 17 }}>{post.title}</h2>
              <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </section>
    );
  }

  if (theme.key === 'mothercare') {
    return (
      <section className="mx-auto grid max-w-3xl grid-cols-1 gap-6 px-6 pb-16 md:px-10">
        {posts.map((post) => (
          <Link key={post.slug} href={`${basePath}/blog/${post.slug}`}>
            <div className="rounded-[var(--radius-lg)] p-6" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              <p className="mb-2 text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}><Calendar size={11} className="mr-1 inline align-[-1px]" />{post.date} · {post.author}</p>
              <h2 className="mb-2 text-lg font-bold" style={{ fontFamily: 'var(--font-display)' }}>{post.title}</h2>
              <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </section>
    );
  }

  // mednova
  return (
    <section className="grid grid-cols-1 gap-6 px-6 pb-16 md:grid-cols-2 md:px-10">
      {posts.map((post) => (
        <Link key={post.slug} href={`${basePath}/blog/${post.slug}`}>
          <Card className="h-full transition hover:-translate-y-1">
            <p className="mb-2 text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}><Calendar size={11} className="mr-1 inline align-[-1px]" />{post.date} · {post.author}</p>
            <h2 className="mb-2 text-lg font-semibold" style={{ fontFamily: 'var(--font-body)' }}>{post.title}</h2>
            <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{post.excerpt}</p>
          </Card>
        </Link>
      ))}
    </section>
  );
}
