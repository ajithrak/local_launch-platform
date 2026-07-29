import { PageHeader } from '@/components/PageHeader';
import { ProgramsList } from '@/components/ProgramsList';
import { requireTemplateConfig } from '@/lib/templates';

export default async function ProgramsPage({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params;
  const config = requireTemplateConfig(template);

  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title="Structured programs, not just gym access"
        description="Pick a program built around a specific goal, coached by someone who checks in every week."
      />
      <ProgramsList programs={config.programs} />
    </>
  );
}
