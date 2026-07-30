'use client';

import { useTheme } from '@locallaunch/theme-engine';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import type { Testimonial as TestimonialConfig } from '@locallaunch/config-schema';

export function Testimonial({ testimonial }: { testimonial: TestimonialConfig }) {
  const theme = useTheme();

  if (theme.key === 'minimal') {
    return (
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl px-6 py-20 md:px-10"
      >
        <Quote size={30} style={{ color: 'var(--color-accent)' }} className="mb-6" />
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 600, lineHeight: 1.3 }}>
          {testimonial.quote}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t pt-4" style={{ borderColor: 'var(--color-border)' }}>
          <span className="text-sm font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
            {testimonial.author}
          </span>
          <div className="flex gap-0.5">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} size={14} fill="var(--color-accent)" color="var(--color-accent)" strokeWidth={0} />
            ))}
          </div>
        </div>
      </motion.section>
    );
  }

  if (theme.key === 'dark') {
    return (
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl px-6 py-16 md:px-10"
      >
        <div className="border-l-4 pl-6" style={{ borderColor: 'var(--color-accent)' }}>
          <div className="mb-3 flex gap-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} size={16} fill="var(--color-accent)" color="var(--color-accent)" strokeWidth={0} />
            ))}
          </div>
          <p className="font-semibold" style={{ fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.4 }}>
            "{testimonial.quote}"
          </p>
          <p className="mt-4 text-sm uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', letterSpacing: 1 }}>
            {testimonial.author}
          </p>
        </div>
      </motion.section>
    );
  }

  if (theme.key === 'neon') {
    return (
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-xl px-6 py-16 md:px-10"
      >
        <div
          className="p-6 text-center"
          style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-accent)', borderRadius: 'var(--radius-md)' }}
        >
          <span
            className="mb-3 inline-block rounded px-2 py-0.5 text-[10px] font-semibold uppercase"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-contrast)', letterSpacing: 1 }}
          >
            Verified Member
          </span>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'var(--color-foreground)', lineHeight: 1.4 }}>
            "{testimonial.quote}"
          </p>
          <p className="mt-4 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}>
            — {testimonial.author}
          </p>
        </div>
      </motion.section>
    );
  }

  if (theme.key === 'gold') {
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
        <p className="font-semibold" style={{ fontFamily: 'var(--font-body)', fontSize: 22, color: 'var(--color-foreground)', lineHeight: 1.4 }}>
          "{testimonial.quote}"
        </p>
        <p className="mt-4 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
          — {testimonial.author}
        </p>
      </motion.section>
    );
  }

  // orange (Titan)
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto max-w-2xl px-6 py-16 text-center md:px-10"
      style={{ backgroundColor: 'var(--color-surface-alt)', borderRadius: 'var(--radius-lg)' }}
    >
      <Quote size={36} style={{ color: 'var(--color-accent)', opacity: 0.4 }} className="mx-auto mb-3" />
      <div className="mb-4 flex justify-center gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={16} fill="var(--color-accent)" color="var(--color-accent)" strokeWidth={0} />
        ))}
      </div>
      <p className="font-semibold" style={{ fontFamily: 'var(--font-body)', fontSize: 22, color: 'var(--color-foreground)', lineHeight: 1.4 }}>
        "{testimonial.quote}"
      </p>
      <p className="mt-4 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
        — {testimonial.author}
      </p>
    </motion.section>
  );
}
