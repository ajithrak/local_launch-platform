import type { HealthcareSiteConfig } from '@locallaunch/config-schema';
import { BlogList } from '../components/BlogList';
import { PageHeader } from '../components/PageHeader';

export function BlogListPageContent({ config }: { config: HealthcareSiteConfig }) {
  return (
    <>
      <PageHeader
        eyebrow="Health Blog"
        title="Health Tips & Patient Education"
        description="Straightforward explanations from our own doctors — no vague filler."
      />
      <BlogList posts={config.blogPosts} />
    </>
  );
}
