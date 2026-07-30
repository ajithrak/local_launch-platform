'use client';

import { Card } from '@locallaunch/ui';
import { motion } from 'framer-motion';
import type { WhyChooseUsItem } from '@locallaunch/config-schema';
import { ICON_MAP } from './icon-map';

export function WhyChooseUs({ items }: { items: WhyChooseUsItem[] }) {
  if (items.length === 0) return null;

  return (
    <section className="px-6 py-16 md:px-10">
      <h2
        className="mb-10 text-center text-3xl"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}
      >
        Why Choose Us
      </h2>
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
              <Card className="h-full">
                {Icon && (
                  <div
                    className="mb-3 flex h-10 w-10 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: `color-mix(in srgb, var(${index % 2 === 0 ? '--color-accent' : '--color-secondary'}) 15%, transparent)`,
                    }}
                  >
                    <Icon size={18} style={{ color: `var(${index % 2 === 0 ? '--color-accent' : '--color-secondary'})` }} />
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
