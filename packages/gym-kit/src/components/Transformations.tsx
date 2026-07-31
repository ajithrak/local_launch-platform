'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Transformation } from '@locallaunch/config-schema';

export function Transformations({ transformations }: { transformations: Transformation[] }) {
  if (transformations.length === 0) return null;

  return (
    <section className="px-6 py-16 md:px-10" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
      <h2
        className="mb-10 text-center text-3xl"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}
      >
        Real Transformations
      </h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {transformations.map((item, index) => (
          <motion.div
            key={`${item.memberName}-${index}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="overflow-hidden rounded-xl border"
            style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
          >
            <div className="relative grid grid-cols-2">
              <div className={`relative flex h-28 items-end justify-start overflow-hidden p-3 ${item.beforeSrc ? '' : item.beforeSwatchClassName}`}>
                {item.beforeSrc && (
                  <img src={item.beforeSrc} alt={`${item.memberName} before`} className="absolute inset-0 h-full w-full object-cover" />
                )}
                <span className="relative rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                  Before
                </span>
              </div>
              <div className={`relative flex h-28 items-end justify-end overflow-hidden p-3 ${item.afterSrc ? '' : item.afterSwatchClassName}`}>
                {item.afterSrc && (
                  <img src={item.afterSrc} alt={`${item.memberName} after`} className="absolute inset-0 h-full w-full object-cover" />
                )}
                <span className="relative rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                  After
                </span>
              </div>
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2"
                style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-accent)' }}
              >
                <ArrowRight size={16} style={{ color: 'var(--color-accent)' }} />
              </div>
            </div>
            <div className="p-5">
              <p className="mb-2 text-lg font-bold" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}>
                {item.statLabel}
              </p>
              <p className="mb-1 text-sm font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                {item.memberName} · {item.duration}
              </p>
              <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
