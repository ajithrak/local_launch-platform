import type { Trainer } from '@locallaunch/config-schema';
import { PageHeader } from '../components/PageHeader';
import { TrainerDetail } from '../components/TrainerDetail';

export function TrainerDetailPageContent({ trainer }: { trainer: Trainer }) {
  return (
    <>
      <PageHeader eyebrow="Coach" title={trainer.name} description={trainer.role} />
      <TrainerDetail trainer={trainer} />
    </>
  );
}
