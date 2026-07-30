'use client';

import { Card } from '@locallaunch/ui';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import type { Program } from '@locallaunch/config-schema';
import { useTemplateBasePath } from './TemplateBasePath';

export function ProgramsList({ programs, compact = false }: { programs: Program[]; compact?: boolean }) {
  const basePath = useTemplateBasePath();

  return (
    <section
      className={
        compact
          ? 'grid gap-4 px-6 pb-16 sm:grid-cols-2 md:px-10 lg:grid-cols-4'
          : 'grid gap-6 px-6 pb-16 md:grid-cols-2 md:px-10'
      }
    >
      {programs.map((program, index) => {
        const tint = index % 2 === 0 ? '--color-accent' : '--color-secondary';
        const previewCount = compact ? 2 : 3;
        return (
          <motion.div
            key={program.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <Link href={`${basePath}/programs/${program.slug}`}>
              <Card
                variant="plain"
                className={`h-full transition hover:-translate-y-1 ${compact ? 'p-4' : ''}`}
                style={{ borderLeft: `3px solid var(${tint})` }}
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span
                    className="text-[10px] font-semibold uppercase"
                    style={{ fontFamily: 'var(--font-body)', color: `var(${tint})`, letterSpacing: 1 }}
                  >
                    {program.duration}
                  </span>
                  <span
                    className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                    style={{
                      backgroundColor: 'var(--color-surface-alt)',
                      color: 'var(--color-muted)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {program.features.length} features
                  </span>
                </div>
                <h2
                  className={compact ? 'mb-1 text-base font-semibold' : 'mb-2 text-xl font-semibold'}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {program.name}
                </h2>
                <p className="mb-3 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                  {program.tagline}
                </p>
                <ul className="mb-3 space-y-1">
                  {program.features.slice(0, previewCount).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-1.5 text-xs"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}
                    >
                      <Check size={11} style={{ color: `var(${tint})`, marginTop: 2, flexShrink: 0 }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold"
                  style={{ fontFamily: 'var(--font-body)', color: `var(${tint})` }}
                >
                  View program <ArrowRight size={14} />
                </span>
              </Card>
            </Link>
          </motion.div>
        );
      })}
    </section>
  );
}
