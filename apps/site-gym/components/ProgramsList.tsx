'use client';

import { Card } from '@locallaunch/ui';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Program } from '@locallaunch/config-schema';
import { useTemplateBasePath } from './TemplateBasePath';

export function ProgramsList({ programs }: { programs: Program[] }) {
  const basePath = useTemplateBasePath();

  return (
    <section className="grid gap-6 px-6 pb-16 md:grid-cols-2 md:px-10">
      {programs.map((program, index) => (
        <motion.div
          key={program.slug}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
        >
          <Link href={`${basePath}/programs/${program.slug}`}>
            <Card className="h-full transition hover:-translate-y-1">
              <p className="mb-1 text-xs font-semibold uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)', letterSpacing: 1 }}>
                {program.duration}
              </p>
              <h2 className="mb-2 text-xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                {program.name}
              </h2>
              <p className="mb-4 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                {program.tagline}
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}
              >
                View program <ArrowRight size={14} />
              </span>
            </Card>
          </Link>
        </motion.div>
      ))}
    </section>
  );
}
