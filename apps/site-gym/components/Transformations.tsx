'use client';

import { motion } from 'framer-motion';
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
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
        {transformations.map((item, index) => (
          <motion.div
            key={item.memberName}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="overflow-hidden rounded-xl border"
            style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
          >
            <div className="grid grid-cols-2">
              <div className={`flex h-32 items-end p-3 ${item.beforeSwatchClassName}`}>
                <span className="text-xs font-semibold text-slate-700">Before</span>
              </div>
              <div className={`flex h-32 items-end p-3 ${item.afterSwatchClassName}`}>
                <span className="text-xs font-semibold text-slate-700">After</span>
              </div>
            </div>
            <div className="p-5">
              <p className="mb-1 font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
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
