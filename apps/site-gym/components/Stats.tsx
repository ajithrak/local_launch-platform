'use client';

import { motion } from 'framer-motion';
import type { Stat } from '@locallaunch/config-schema';
import { ICON_MAP } from './icon-map';

export function Stats({ stats }: { stats: Stat[] }) {
  return (
    <section
      className="grid grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4 md:px-10"
      style={{ backgroundColor: 'var(--color-surface-alt)' }}
    >
      {stats.map((stat, index) => {
        const Icon = ICON_MAP[stat.icon];
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="text-center"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-foreground)' }}
          >
            {Icon && <Icon className="mx-auto mb-2" size={22} style={{ color: 'var(--color-accent)' }} />}
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 28 }}>{stat.value}</div>
            <div className="text-xs uppercase tracking-wide" style={{ color: 'var(--color-muted)' }}>
              {stat.label}
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
