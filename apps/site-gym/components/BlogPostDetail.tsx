import type { BlogPost } from '@locallaunch/config-schema';

export function BlogPostDetail({ post }: { post: BlogPost }) {
  return (
    <section className="mx-auto max-w-2xl px-6 pb-16 md:px-10">
      <p className="mb-6 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
        {post.date} · {post.author}
      </p>
      <div className="space-y-4">
        {post.content.map((paragraph, index) => (
          <p
            key={index}
            className="leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-foreground)' }}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
