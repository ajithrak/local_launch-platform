import { Calendar, User } from 'lucide-react';
import type { BlogPost } from '@locallaunch/config-schema';

export function BlogPostDetail({ post }: { post: BlogPost }) {
  return (
    <section className="mx-auto max-w-2xl px-6 pb-16 md:px-10">
      <div className="mb-6 flex items-center gap-4 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
        <span className="flex items-center gap-1.5">
          <Calendar size={13} style={{ color: 'var(--color-accent)' }} /> {post.date}
        </span>
        <span className="flex items-center gap-1.5">
          <User size={13} style={{ color: 'var(--color-accent)' }} /> {post.author}
        </span>
      </div>
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
