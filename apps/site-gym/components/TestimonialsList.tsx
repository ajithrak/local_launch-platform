'use client';

import { Card } from '@locallaunch/ui';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type { Testimonial } from '@locallaunch/config-schema';

export function TestimonialsList({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="grid grid-cols-1 gap-6 px-6 pb-16 md:grid-cols-3 md:px-10">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.author}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
        >
          <Card className="h-full">
            <div className="mb-3 flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} size={14} fill="var(--color-accent)" color="var(--color-accent)" strokeWidth={0} />
              ))}
            </div>
            <p className="mb-4 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              "{testimonial.quote}"
            </p>
            <p className="text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              — {testimonial.author}
            </p>
          </Card>
        </motion.div>
      ))}
    </section>
  );
}
