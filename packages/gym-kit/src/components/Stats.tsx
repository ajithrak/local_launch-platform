'use client';

import { Card } from '@locallaunch/ui';
import { useTheme } from '@locallaunch/theme-engine';
import { motion } from 'framer-motion';
import type { Stat } from '@locallaunch/config-schema';
import { ICON_MAP } from './icon-map';

export function Stats({ stats }: { stats: Stat[] }) {
  const theme = useTheme();

  if (theme.key === 'gold') {
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

  if (theme.key === 'minimal') {
    return (
      <section className="border-y px-6 py-10 md:px-10" style={{ borderColor: 'var(--color-border)' }}>
        <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-y-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={index !== 0 ? 'border-l pl-8' : ''}
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 700, color: 'var(--color-foreground)' }}>
                {stat.value}
              </div>
              <div className="mt-1 text-xs uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', letterSpacing: 1.5 }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  if (theme.key === 'dark') {
    return (
      <section className="grid grid-cols-2 md:grid-cols-4" style={{ backgroundColor: 'var(--color-surface)' }}>
        {stats.map((stat, index) => {
          const Icon = ICON_MAP[stat.icon];
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="border-t-2 px-5 py-8"
              style={{ borderColor: 'var(--color-accent)', borderRightWidth: index % 2 === 0 ? 1 : 0, borderRightStyle: 'solid', borderRightColor: 'var(--color-border)' }}
            >
              {Icon && <Icon size={18} style={{ color: 'var(--color-accent)', marginBottom: 10 }} />}
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 34, color: 'var(--color-foreground)' }}>
                {stat.value}
              </div>
              <div
                className="mt-1 text-xs uppercase"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', letterSpacing: 1 }}
              >
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </section>
    );
  }

  if (theme.key === 'neon') {
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
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="relative overflow-hidden p-4"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span
                    className="text-[10px] uppercase"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', letterSpacing: 1.5 }}
                  >
                    {stat.label}
                  </span>
                  {Icon && <Icon size={14} style={{ color: 'var(--color-accent)' }} />}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, color: 'var(--color-accent)' }}>
                  {stat.value}
                </div>
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-0.5"
                  style={{ backgroundColor: 'var(--color-accent)', opacity: 0.5 }}
                />
              </motion.div>
            );
          })}
        </div>
      </section>
    );
  }

  // orange (Titan) — card-less stat band with dividers
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
