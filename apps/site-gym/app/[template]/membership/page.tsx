import { Faq } from '@/components/Faq';
import { Membership } from '@/components/Membership';
import { MembershipComparison } from '@/components/MembershipComparison';
import { PageHeader } from '@/components/PageHeader';
import { requireTemplateConfig } from '@/lib/templates';

export default async function MembershipPage({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params;
  const config = requireTemplateConfig(template);

  return (
    <>
      <PageHeader
        eyebrow="Membership"
        title="Plans built around how you train"
        description="No lock-in contracts, no hidden fees. Pick the plan that matches how often you show up."
      />
      <Membership plans={config.plans} />
      <MembershipComparison plans={config.plans} />
      <Faq faqs={config.faqs} />
    </>
  );
}
