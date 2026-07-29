import { Button, Card } from '@locallaunch/ui';
import { Check } from 'lucide-react';
import type { Program } from '@locallaunch/config-schema';

export function ProgramDetail({ program }: { program: Program }) {
  return (
    <section className="grid gap-8 px-6 pb-16 md:grid-cols-3 md:px-10">
      <div className="md:col-span-2">
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }} className="leading-relaxed">
          {program.description}
        </p>
        <h2 className="mb-4 mt-8 text-lg font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
          What's included
        </h2>
        <ul className="space-y-3">
          {program.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              <Check size={16} style={{ color: 'var(--color-accent)', marginTop: 2 }} /> {feature}
            </li>
          ))}
        </ul>
      </div>
      <Card className="h-fit">
        <p className="text-xs uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', letterSpacing: 1 }}>
          Duration
        </p>
        <p className="mb-4 text-lg font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
          {program.duration}
        </p>
        <Button className="w-full">Enquire about this program</Button>
      </Card>
    </section>
  );
}
