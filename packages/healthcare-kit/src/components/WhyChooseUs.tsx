'use client';

import { Card } from '@locallaunch/ui';
import { useTheme } from '@locallaunch/theme-engine';
import { motion } from 'framer-motion';
import type { WhyChooseUsItem } from '@locallaunch/config-schema';
import { ICON_MAP } from './icon-map';

export function WhyChooseUs({ items }: { items: WhyChooseUsItem[] }) {
  const theme = useTheme();
  if (items.length === 0) return null;

  const heading = 'Why Patients Choose Us';

  if (theme.key === 'mednova') {
    return (
      <section className="px-6 py-16 md:px-10">
        <h2 className="mb-10 text-center text-3xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>
          {heading}
        </h2>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="h-full">
                  {Icon && (
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 14%, transparent)' }}>
                      <Icon size={18} style={{ color: 'var(--color-accent)' }} />
                    </div>
                  )}
                  <h3 className="mb-1.5 text-base font-semibold" style={{ fontFamily: 'var(--font-body)' }}>{item.title}</h3>
                  <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{item.description}</p>
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
      <section className="px-6 py-16 md:px-10" style={{ backgroundColor: 'var(--color-surface-alt)', borderRadius: 'var(--radius-lg)', margin: '0 1.25rem' }}>
        <h2 className="mb-10 text-center text-3xl" style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}>
          {heading}
        </h2>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex flex-col items-center text-center"
              >
                {Icon && (
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: 'var(--color-surface)' }}>
                    <Icon size={22} style={{ color: 'var(--color-accent)' }} />
                  </div>
                )}
                <h3 className="mb-1 text-base font-bold" style={{ fontFamily: 'var(--font-body)' }}>{item.title}</h3>
                <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    );
  }

  if (theme.key === 'orthoedge') {
    return (
      <section className="px-6 py-16 md:px-10">
        <h2 className="mb-10 text-3xl uppercase" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>
          {heading}
        </h2>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-0 sm:grid-cols-2" style={{ border: '1px solid var(--color-border)' }}>
          {items.map((item, index) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className="flex items-start gap-4 p-6"
                style={{
                  borderRight: index % 2 === 0 ? '1px solid var(--color-border)' : 'none',
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, color: 'var(--color-secondary)', minWidth: 26 }}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    {Icon && <Icon size={16} style={{ color: 'var(--color-accent)' }} />}
                    <h3 className="text-base font-bold" style={{ fontFamily: 'var(--font-body)' }}>{item.title}</h3>
                  </div>
                  <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    );
  }

  if (theme.key === 'smilecraft') {
    return (
      <section className="px-6 py-16 md:px-10">
        <h2 className="mb-10 text-center text-3xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>
          {heading}
        </h2>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-[var(--radius-lg)] p-6 text-center"
                style={{ backgroundColor: 'var(--color-surface)', boxShadow: 'var(--shadow-card)' }}
              >
                {Icon && (
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
                    <Icon size={20} style={{ color: 'var(--color-accent)' }} />
                  </div>
                )}
                <h3 className="mb-1.5 text-base font-bold" style={{ fontFamily: 'var(--font-body)' }}>{item.title}</h3>
                <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    );
  }

  // mothercare
  return (
    <section className="px-6 py-16 md:px-10">
      <h2 className="mb-10 text-center text-3xl" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--color-foreground)' }}>
        {heading}
      </h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map((item, index) => {
          const Icon = ICON_MAP[item.icon];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.09 }}
              className="flex items-start gap-4 rounded-[var(--radius-lg)] p-5"
              style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
            >
              {Icon && (
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
                  <Icon size={19} style={{ color: 'var(--color-accent)' }} />
                </div>
              )}
              <div>
                <h3 className="mb-1 text-base font-bold" style={{ fontFamily: 'var(--font-body)' }}>{item.title}</h3>
                <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
