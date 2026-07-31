import { Card } from '@locallaunch/ui';
import { Award, Target, Users } from 'lucide-react';
import type { Trainer } from '@locallaunch/config-schema';

export function TrainerDetail({ trainer }: { trainer: Trainer }) {
  return (
    <section className="grid grid-cols-1 gap-8 px-6 pb-16 md:grid-cols-3 md:px-10">
      <div className="md:col-span-2">
        <div className="mb-6 flex items-center gap-4">
          <div
            className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full"
            style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 15%, transparent)' }}
          >
            {trainer.photo ? (
              <img src={trainer.photo} alt={trainer.name} className="h-full w-full object-cover" />
            ) : (
              <Users size={28} style={{ color: 'var(--color-accent)' }} />
            )}
          </div>
          <div>
            <h1 className="font-semibold" style={{ fontFamily: 'var(--font-body)', fontSize: 26 }}>{trainer.name}</h1>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}>{trainer.role}</p>
          </div>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }} className="leading-relaxed">
          {trainer.bio}
        </p>
      </div>

      <div className="space-y-4">
        <Card>
          <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
            <Award size={16} style={{ color: 'var(--color-accent)' }} /> Certifications
          </h2>
          <ul className="space-y-1.5 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            {trainer.certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
            <Target size={16} style={{ color: 'var(--color-accent)' }} /> Specialties
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {trainer.specialties.map((s) => (
              <span
                key={s}
                className="rounded-full px-2.5 py-1 text-xs"
                style={{ backgroundColor: 'var(--color-surface-alt)', color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
              >
                {s}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
