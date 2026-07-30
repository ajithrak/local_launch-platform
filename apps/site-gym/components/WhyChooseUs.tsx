'use client';

import { Card } from '@locallaunch/ui';
import { useTheme } from '@locallaunch/theme-engine';
import { motion } from 'framer-motion';
import type { WhyChooseUsItem } from '@locallaunch/config-schema';
import { ICON_MAP } from './icon-map';

export function WhyChooseUs({ items }: { items: WhyChooseUsItem[] }) {
  const theme = useTheme();
  if (items.length === 0) return null;

  if (theme.key === 'gold') {
    return (
      <section className="px-6 py-16 md:px-10">
        <h2
          className="mb-10 text-center text-3xl"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}
        >
          Why Choose Us
        </h2>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = ICON_MAP[item.icon];
            const tint = index % 2 === 0 ? '--color-accent' : '--color-secondary';
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className="h-full">
                  {Icon && (
                    <div
                      className="mb-3 flex h-10 w-10 items-center justify-center rounded-full"
                      style={{ backgroundColor: `color-mix(in srgb, var(${tint}) 15%, transparent)` }}
                    >
                      <Icon size={18} style={{ color: `var(${tint})` }} />
                    </div>
                  )}
                  <h3 className="mb-1.5 text-base font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                    {item.description}
                  </p>
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
      <section className="px-6 py-16 md:px-10">
        <h2 className="mb-10 text-3xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>
          Why Choose Us
        </h2>
        <div className="mx-auto max-w-3xl divide-y divide-[var(--color-border)]">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex items-start gap-6 py-6 first:pt-0"
            >
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--color-muted)' }}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="mb-1 font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                  {item.title}
                </h3>
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

  if (theme.key === 'dark') {
    return (
      <section className="px-6 py-16 md:px-10">
        <h2 className="mb-10 text-center text-3xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>
          Why Choose Us
        </h2>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((item, index) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card variant="plain" className="relative h-full">
                  <span
                    aria-hidden
                    className="absolute -right-1 -top-5 select-none"
                    style={{ fontFamily: 'var(--font-display)', fontSize: 80, color: 'var(--color-border)', lineHeight: 1 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {Icon && <Icon size={20} style={{ color: 'var(--color-accent)', marginBottom: 10 }} />}
                  <h3 className="relative mb-1.5 text-base font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                    {item.title}
                  </h3>
                  <p className="relative text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>
    );
  }

  if (theme.key === 'neon') {
    return (
      <section className="px-6 py-16 md:px-10">
        <h2 className="mb-10 text-center text-3xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>
          Why Choose Us
        </h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((item, index) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-5"
                style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className="text-[10px] uppercase"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', letterSpacing: 1.5 }}
                  >
                    Feature {String(index + 1).padStart(2, '0')}
                  </span>
                  {Icon && <Icon size={16} style={{ color: 'var(--color-accent)' }} />}
                </div>
                <h3 className="mb-1.5 text-base font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                  {item.title}
                </h3>
                <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    );
  }

  // orange (Titan) — left-accent-border icon row
  return (
    <section className="px-6 py-16 md:px-10">
      <h2
        className="mb-10 text-center text-3xl"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}
      >
        Why Choose Us
      </h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item, index) => {
          const Icon = ICON_MAP[item.icon];
          const tint = index % 2 === 0 ? '--color-accent' : '--color-secondary';
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card
                variant="plain"
                className="flex h-full items-start gap-4"
                style={{ borderLeft: `3px solid var(${tint})` }}
              >
                {Icon && (
                  <div
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: `color-mix(in srgb, var(${tint}) 15%, transparent)` }}
                  >
                    <Icon size={20} style={{ color: `var(${tint})` }} />
                  </div>
                )}
                <div>
                  <h3 className="mb-1.5 text-base font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
