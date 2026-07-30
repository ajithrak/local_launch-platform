'use client';

import { Card } from '@locallaunch/ui';
import { motion } from 'framer-motion';
import type { Stat } from '@locallaunch/config-schema';
import { ICON_MAP } from './icon-map';

export function Stats({ stats }: { stats: Stat[] }) {
  return (
    <section className="px-6 py-16 md:px-10" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = ICON_MAP[stat.icon];
          const tint = index % 2 === 0 ? '--color-accent' : '--color-secondary';
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Card className="flex flex-col items-center text-center">
                {Icon && (
                  <div
                    className="mb-3 flex h-11 w-11 items-center justify-center rounded-full"
                    style={{ backgroundColor: `color-mix(in srgb, var(${tint}) 15%, transparent)` }}
                  >
                    <Icon size={20} style={{ color: `var(${tint})` }} />
                  </div>
                )}
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, color: 'var(--color-foreground)' }}>
                  {stat.value}
                </div>
                <div
                  className="mt-1 text-xs uppercase tracking-wide"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}
                >
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
