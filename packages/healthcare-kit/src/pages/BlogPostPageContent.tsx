import type { BlogPost } from '@locallaunch/config-schema';
import { BlogPostDetail } from '../components/BlogPostDetail';
import { PageHeader } from '../components/PageHeader';

export function BlogPostPageContent({ post }: { post: BlogPost }) {
  return (
    <>
      <PageHeader eyebrow="Health Blog" title={post.title} />
      <BlogPostDetail post={post} />
    </>
  );
}
