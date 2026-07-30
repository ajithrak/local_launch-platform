'use client';

import { Card } from '@locallaunch/ui';
import { useTheme } from '@locallaunch/theme-engine';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { BlogPost } from '@locallaunch/config-schema';
import { useTemplateBasePath } from './TemplateBasePath';

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const theme = useTheme();
  const basePath = useTemplateBasePath();

  if (theme.key === 'minimal') {
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
                  {post.date} · {post.author}
                </p>
                <h2 className="text-lg font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                  {post.title}
                </h2>
                <p className="mt-1 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                  {post.excerpt}
                </p>
              </div>
              <ArrowRight size={18} className="flex-shrink-0" style={{ color: 'var(--color-foreground)' }} />
            </Link>
          ))}
        </div>
      </section>
    );
  }

  if (theme.key === 'dark') {
    return (
      <section className="mx-auto max-w-3xl space-y-3 px-6 pb-16 md:px-10">
        {posts.map((post, index) => (
          <Link
            key={post.slug}
            href={`${basePath}/blog/${post.slug}`}
            className="flex items-stretch transition hover:-translate-y-0.5"
            style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
          >
            <div
              className="flex w-14 flex-shrink-0 items-center justify-center text-2xl"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-contrast)', fontFamily: 'var(--font-display)' }}
            >
              {index + 1}
            </div>
            <div className="flex-1 p-4">
              <p className="mb-1 text-xs uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)', letterSpacing: 1 }}>
                {post.date} · {post.author}
              </p>
              <h2 className="font-semibold" style={{ fontFamily: 'var(--font-body)', fontSize: 17 }}>
                {post.title}
              </h2>
              <p className="mt-1 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </section>
    );
  }

  if (theme.key === 'neon') {
    return (
      <section className="grid grid-cols-1 gap-4 px-6 pb-16 md:grid-cols-2 md:px-10">
        {posts.map((post) => (
          <Link key={post.slug} href={`${basePath}/blog/${post.slug}`}>
            <div
              className="h-full p-5 transition hover:-translate-y-1"
              style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}
            >
              <span
                className="mb-3 inline-block rounded px-2 py-0.5 text-[10px] uppercase"
                style={{ backgroundColor: 'var(--color-surface-alt)', color: 'var(--color-accent)', letterSpacing: 1 }}
              >
                {post.date}
              </span>
              <h2 className="mb-2 font-semibold" style={{ fontFamily: 'var(--font-body)', fontSize: 17 }}>
                {post.title}
              </h2>
              <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </section>
    );
  }

  if (theme.key === 'gold') {
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

  // orange (Titan)
  return (
    <section className="grid grid-cols-1 gap-4 px-6 pb-16 md:grid-cols-2 md:px-10">
      {posts.map((post, index) => {
        const tint = index % 2 === 0 ? '--color-accent' : '--color-secondary';
        return (
          <Link key={post.slug} href={`${basePath}/blog/${post.slug}`}>
            <Card variant="plain" className="h-full transition hover:-translate-y-1" style={{ borderLeft: `3px solid var(${tint})` }}>
              <p className="mb-2 text-xs font-semibold uppercase" style={{ fontFamily: 'var(--font-body)', color: `var(${tint})`, letterSpacing: 1 }}>
                {post.date} · {post.author}
              </p>
              <h2 className="mb-2 text-lg font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                {post.title}
              </h2>
              <p className="mb-3 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ fontFamily: 'var(--font-body)', color: `var(${tint})` }}>
                Read more <ArrowRight size={14} />
              </span>
            </Card>
          </Link>
        );
      })}
    </section>
  );
}
