'use client';

import { motion } from 'framer-motion';
import type { Stat } from '@locallaunch/config-schema';
import { ICON_MAP } from './icon-map';

export function Stats({ stats }: { stats: Stat[] }) {
  return (
    <section className="px-6 py-14 md:px-10" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
      <div className="mx-auto grid max-w-5xl grid-cols-2 md:grid-cols-4 md:divide-x md:divide-[var(--color-border)]">
        {stats.map((stat, index) => {
          const Icon = ICON_MAP[stat.icon];
          const tint = index % 2 === 0 ? '--color-accent' : '--color-secondary';
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex flex-col items-center gap-1.5 px-4 py-2 text-center"
            >
              {Icon && <Icon size={22} style={{ color: `var(${tint})` }} />}
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--color-foreground)' }}>
                {stat.value}
              </div>
              <div
                className="text-xs uppercase tracking-wide"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}
              >
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
