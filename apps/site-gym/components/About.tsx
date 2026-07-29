'use client';

import { motion } from 'framer-motion';
import type { About as AboutConfig } from '@locallaunch/config-schema';

export function About({ about }: { about: AboutConfig }) {
  return (
    <section className="grid gap-10 px-6 pb-16 md:grid-cols-3 md:px-10">
      <div className="md:col-span-2 space-y-4">
        {about.body.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}
            className="leading-relaxed"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
      <div>
        <h2
          className="mb-3 text-sm font-semibold uppercase"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)', letterSpacing: 1 }}
        >
          At a glance
        </h2>
        <ul className="space-y-2">
          {about.highlights.map((item) => (
            <li
              key={item}
              className="border-l-2 pl-3 text-sm"
              style={{ borderColor: 'var(--color-accent)', fontFamily: 'var(--font-body)' }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
