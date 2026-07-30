import type { GymSiteConfig } from '@locallaunch/config-schema';
import { BlogList } from '../components/BlogList';
import { PageHeader } from '../components/PageHeader';

export function BlogListPageContent({ config }: { config: GymSiteConfig }) {
  return (
    <>
      <PageHeader eyebrow="Blog" title="Training notes" description="Coaching advice from our team, no fads." />
      <BlogList posts={config.blogPosts} />
    </>
  );
}
