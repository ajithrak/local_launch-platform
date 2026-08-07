'use client';

import { Card } from '@locallaunch/ui';
import { useTheme } from '@locallaunch/theme-engine';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import type { Testimonial } from '@locallaunch/config-schema';

export function TestimonialsList({ testimonials }: { testimonials: Testimonial[] }) {
  const theme = useTheme();

  if (theme.key === 'orthoedge') {
    return (
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-x-12 gap-y-10 px-6 pb-16 sm:grid-cols-2 md:px-10">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="border-t pt-6"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <Quote size={20} style={{ color: 'var(--color-accent)' }} className="mb-3" />
            <p className="mb-4 text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>{testimonial.quote}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold" style={{ fontFamily: 'var(--font-body)' }}>{testimonial.author}</span>
              <div className="flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={12} fill="var(--color-accent)" color="var(--color-accent)" strokeWidth={0} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    );
  }

  if (theme.key === 'careplus') {
    return (
      <section className="grid grid-cols-1 gap-6 px-6 pb-16 md:grid-cols-3 md:px-10">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="h-full rounded-[var(--radius-lg)] p-5"
            style={{ backgroundColor: 'var(--color-surface-alt)' }}
          >
            <div className="mb-3 flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} size={13} fill="var(--color-secondary)" color="var(--color-secondary)" strokeWidth={0} />
              ))}
            </div>
            <p className="mb-4 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>&quot;{testimonial.quote}&quot;</p>
            <p className="text-xs font-semibold" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{testimonial.author}</p>
          </motion.div>
        ))}
      </section>
    );
  }

  if (theme.key === 'smilecraft') {
    return (
      <section className="grid grid-cols-1 gap-4 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-3 md:px-10">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="h-full rounded-[var(--radius-lg)] p-5 text-center"
            style={{ backgroundColor: 'var(--color-surface)', boxShadow: 'var(--shadow-card)' }}
          >
            <span className="mb-3 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase" style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-contrast)', letterSpacing: 1 }}>
              Verified Patient
            </span>
            <p className="mb-3 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>&quot;{testimonial.quote}&quot;</p>
            <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}>— {testimonial.author}</p>
          </motion.div>
        ))}
      </section>
    );
  }

  if (theme.key === 'mothercare') {
    return (
      <section className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-6 pb-16 sm:grid-cols-2 md:px-10">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.09 }}
            className="rounded-[var(--radius-lg)] p-6 text-center"
            style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
          >
            <Quote size={22} style={{ color: 'var(--color-accent)' }} className="mx-auto mb-3" />
            <p className="mb-4 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>&quot;{testimonial.quote}&quot;</p>
            <div className="mb-2 flex justify-center gap-0.5">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} size={12} fill="var(--color-accent)" color="var(--color-accent)" strokeWidth={0} />
              ))}
            </div>
            <p className="text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{testimonial.author}</p>
          </motion.div>
        ))}
      </section>
    );
  }

  // mednova
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
            <p className="mb-4 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>&quot;{testimonial.quote}&quot;</p>
            <p className="text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>— {testimonial.author}</p>
          </Card>
        </motion.div>
      ))}
    </section>
  );
}
