'use client';

import { Card } from '@locallaunch/ui';
import { useTheme } from '@locallaunch/theme-engine';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Service } from '@locallaunch/config-schema';
import { useTemplateBasePath } from './TemplateBasePath';

export function ServicesGrid({ services, compact = false }: { services: Service[]; compact?: boolean }) {
  const theme = useTheme();
  const basePath = useTemplateBasePath();

  if (theme.key === 'orthoedge') {
    return (
      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
          {services.map((service, index) => (
            <motion.div key={service.slug} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.3, delay: index * 0.05 }} style={{ borderColor: 'var(--color-border)' }}>
              <Link href={`${basePath}/services/${service.slug}`} className="flex items-center justify-between gap-4 px-2 py-6 transition hover:bg-[color-mix(in_srgb,var(--color-accent)_6%,transparent)]">
                <div className="flex items-baseline gap-4">
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, color: 'var(--color-secondary)' }}>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <div className="font-bold" style={{ fontFamily: 'var(--font-body)', fontSize: 18 }}>{service.name}</div>
                    <div className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{service.tagline}</div>
                  </div>
                </div>
                <ArrowRight size={18} style={{ color: 'var(--color-accent)' }} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  if (theme.key === 'careplus') {
    return (
      <section className="px-6 pb-16 md:px-10">
        <div className={`mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 ${compact ? '' : 'lg:grid-cols-3'}`}>
          {services.map((service, index) => (
            <motion.div key={service.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.4, delay: index * 0.07 }}>
              <Link href={`${basePath}/services/${service.slug}`} className="block rounded-[var(--radius-lg)] p-6 transition hover:-translate-y-1" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
                <div className="font-bold" style={{ fontFamily: 'var(--font-body)', fontSize: 17 }}>{service.name}</div>
                <div className="mb-2 text-sm font-medium" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-secondary)' }}>{service.tagline}</div>
                <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{service.overview.slice(0, 96)}…</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  // shared card recipe for mednova / smilecraft / mothercare — differ only via theme.card tokens
  return (
    <section className="px-6 pb-16 md:px-10">
      <div className={`mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 ${compact ? '' : 'lg:grid-cols-3'}`}>
        {services.map((service, index) => (
          <motion.div key={service.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.4, delay: index * 0.08 }}>
            <Link href={`${basePath}/services/${service.slug}`}>
              <Card className="h-full">
                <div className="font-bold" style={{ fontFamily: 'var(--font-body)', fontSize: 17 }}>{service.name}</div>
                <div className="mb-2 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}>{service.tagline}</div>
                <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{service.overview.slice(0, 96)}…</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}>
                  Learn more <ArrowRight size={12} />
                </span>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
