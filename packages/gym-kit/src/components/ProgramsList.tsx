'use client';

import { Card } from '@locallaunch/ui';
import { useTheme } from '@locallaunch/theme-engine';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import type { Program } from '@locallaunch/config-schema';
import { useTemplateBasePath } from './TemplateBasePath';

export function ProgramsList({ programs, compact = false }: { programs: Program[]; compact?: boolean }) {
  const theme = useTheme();
  const basePath = useTemplateBasePath();

  if (theme.key === 'gold') {
    return (
      <section className="grid grid-cols-1 gap-6 px-6 pb-16 md:grid-cols-2 md:px-10">
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
                <p
                  className="mb-1 text-xs font-semibold uppercase"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)', letterSpacing: 1 }}
                >
                  {program.duration}
                </p>
                <h2 className="mb-2 text-xl font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
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

  if (theme.key === 'minimal') {
    return (
      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto max-w-3xl divide-y divide-[var(--color-border)]">
          {programs.map((program, index) => (
            <motion.div
              key={program.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Link
                href={`${basePath}/programs/${program.slug}`}
                className="flex items-center justify-between gap-6 py-6 first:pt-0"
              >
                <div>
                  <div className="mb-1 text-xs uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', letterSpacing: 1.5 }}>
                    {program.duration}
                  </div>
                  <h2 className="font-semibold" style={{ fontFamily: 'var(--font-body)', fontSize: 18 }}>
                    {program.name}
                  </h2>
                  <p className="mt-1 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                    {program.tagline}
                  </p>
                </div>
                <ArrowRight size={18} className="flex-shrink-0" style={{ color: 'var(--color-foreground)' }} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  if (theme.key === 'dark') {
    return (
      <section className="space-y-3 px-6 pb-16 md:px-10">
        {programs.map((program, index) => (
          <motion.div
            key={program.slug}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="mx-auto max-w-3xl"
          >
            <Link
              href={`${basePath}/programs/${program.slug}`}
              className="flex items-stretch transition hover:-translate-y-0.5"
              style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
            >
              <div
                className="flex w-14 flex-shrink-0 items-center justify-center text-2xl"
                style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-contrast)', fontFamily: 'var(--font-display)' }}
              >
                {index + 1}
              </div>
              <div className="flex-1 p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-semibold" style={{ fontFamily: 'var(--font-body)', fontSize: 17 }}>
                    {program.name}
                  </h2>
                  <span className="text-xs uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)', letterSpacing: 1 }}>
                    {program.duration}
                  </span>
                </div>
                <p className="mt-1 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                  {program.tagline}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>
    );
  }

  if (theme.key === 'neon') {
    return (
      <section className="grid grid-cols-1 gap-4 px-6 pb-16 sm:grid-cols-2 md:px-10">
        {programs.map((program, index) => (
          <motion.div
            key={program.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <Link href={`${basePath}/programs/${program.slug}`}>
              <div
                className="h-full p-5 transition hover:-translate-y-1"
                style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}
              >
                <div className="mb-3 flex flex-wrap gap-1.5">
                  <span
                    className="rounded px-2 py-0.5 text-[10px] uppercase"
                    style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 20%, transparent)', color: 'var(--color-accent)', fontFamily: 'var(--font-body)' }}
                  >
                    {program.duration}
                  </span>
                  <span
                    className="rounded px-2 py-0.5 text-[10px] uppercase"
                    style={{ backgroundColor: 'var(--color-surface-alt)', color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
                  >
                    {program.features.length} features
                  </span>
                </div>
                <h2 className="mb-1 font-semibold" style={{ fontFamily: 'var(--font-body)', fontSize: 17 }}>
                  {program.name}
                </h2>
                <p className="mb-3 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                  {program.tagline}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}
                >
                  View program <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>
    );
  }

  // orange (Titan) — dense list-style cards, more content per card
  return (
    <section
      className={
        compact
          ? 'grid grid-cols-1 gap-4 px-6 pb-16 sm:grid-cols-2 md:px-10 lg:grid-cols-4'
          : 'grid grid-cols-1 gap-6 px-6 pb-16 md:grid-cols-2 md:px-10'
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
