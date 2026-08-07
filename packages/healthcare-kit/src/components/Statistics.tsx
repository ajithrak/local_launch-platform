'use client';

import { Card } from '@locallaunch/ui';
import { useTheme } from '@locallaunch/theme-engine';
import { motion } from 'framer-motion';
import type { Stat } from '@locallaunch/config-schema';
import { ICON_MAP } from './icon-map';

export function Statistics({ stats }: { stats: Stat[] }) {
  const theme = useTheme();

  if (stats.length === 0) return null;

  if (theme.key === 'mednova') {
    return (
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = ICON_MAP[stat.icon];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <Card className="flex flex-col items-center text-center">
                  {Icon && (
                    <div
                      className="mb-3 flex h-11 w-11 items-center justify-center rounded-full"
                      style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 14%, transparent)' }}
                    >
                      <Icon size={20} style={{ color: 'var(--color-accent)' }} />
                    </div>
                  )}
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--color-foreground)' }}>{stat.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wide" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
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

  if (theme.key === 'careplus') {
    return (
      <section className="px-6 py-14 md:px-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-6 sm:justify-between">
          {stats.map((stat, index) => {
            const Icon = ICON_MAP[stat.icon];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full" style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 16%, transparent)' }}>
                  {Icon && <Icon size={24} style={{ color: 'var(--color-accent)' }} />}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 800 }}>{stat.value}</div>
                <div className="text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </section>
    );
  }

  if (theme.key === 'orthoedge') {
    return (
      <section className="grid grid-cols-2 md:grid-cols-4" style={{ backgroundColor: 'var(--color-foreground)' }}>
        {stats.map((stat, index) => {
          const Icon = ICON_MAP[stat.icon];
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="px-5 py-9"
              style={{ borderRight: index % 4 !== 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}
            >
              {Icon && <Icon size={18} style={{ color: 'var(--color-secondary)', marginBottom: 10 }} />}
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 34, color: 'var(--color-background)' }}>{stat.value}</div>
              <div className="mt-1 text-xs uppercase" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.6)', letterSpacing: 1 }}>
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </section>
    );
  }

  if (theme.key === 'smilecraft') {
    return (
      <section className="px-6 py-14 md:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = ICON_MAP[stat.icon];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex flex-col items-center gap-1 rounded-[var(--radius-lg)] p-5 text-center"
                style={{ backgroundColor: 'var(--color-surface-alt)' }}
              >
                {Icon && <Icon size={22} style={{ color: 'var(--color-accent)' }} />}
                <div className="mt-1" style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700 }}>{stat.value}</div>
                <div className="text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </section>
    );
  }

  // mothercare
  return (
    <section className="px-6 py-14 md:px-10">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = ICON_MAP[stat.icon];
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col items-center gap-1.5 text-center"
            >
              {Icon && (
                <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
                  <Icon size={20} style={{ color: 'var(--color-accent)' }} />
                </div>
              )}
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 800 }}>{stat.value}</div>
              <div className="text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{stat.label}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
