'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type { Testimonial as TestimonialConfig } from '@locallaunch/config-schema';

export function Testimonial({ testimonial }: { testimonial: TestimonialConfig }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-2xl px-6 py-16 text-center md:px-10"
    >
      <div className="mb-4 flex justify-center gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={16} fill="var(--color-accent)" color="var(--color-accent)" strokeWidth={0} />
        ))}
      </div>
      <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--color-foreground)', lineHeight: 1.4 }}>
        "{testimonial.quote}"
      </p>
      <p className="mt-4 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
        — {testimonial.author}
      </p>
    </motion.section>
  );
}
