'use client';

import { useTheme } from '@locallaunch/theme-engine';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import type { Testimonial as TestimonialConfig } from '@locallaunch/config-schema';

export function Testimonial({ testimonial }: { testimonial: TestimonialConfig }) {
  const theme = useTheme();

  if (theme.key === 'orthoedge') {
    return (
      <motion.section initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="mx-auto max-w-2xl px-6 py-16 md:px-10">
        <div className="border-l-4 pl-6" style={{ borderColor: 'var(--color-accent)' }}>
          <div className="mb-3 flex gap-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} size={16} fill="var(--color-accent)" color="var(--color-accent)" strokeWidth={0} />
            ))}
          </div>
          <p className="font-semibold" style={{ fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.4 }}>&quot;{testimonial.quote}&quot;</p>
          <p className="mt-4 text-sm uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', letterSpacing: 1 }}>{testimonial.author}</p>
        </div>
      </motion.section>
    );
  }

  if (theme.key === 'careplus') {
    return (
      <motion.section initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="mx-auto max-w-xl px-6 py-16 text-center md:px-10">
        <div className="rounded-[var(--radius-lg)] p-7" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="mb-3 flex justify-center gap-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} size={16} fill="var(--color-secondary)" color="var(--color-secondary)" strokeWidth={0} />
            ))}
          </div>
          <p className="font-semibold" style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.4 }}>&quot;{testimonial.quote}&quot;</p>
          <p className="mt-4 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>— {testimonial.author}</p>
        </div>
      </motion.section>
    );
  }

  if (theme.key === 'smilecraft') {
    return (
      <motion.section initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="mx-auto max-w-xl px-6 py-16 md:px-10">
        <div className="rounded-[var(--radius-lg)] p-7 text-center" style={{ backgroundColor: 'var(--color-surface)', boxShadow: 'var(--shadow-card)' }}>
          <span className="mb-3 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase" style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-contrast)', letterSpacing: 1 }}>
            Verified Patient
          </span>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'var(--color-foreground)', lineHeight: 1.4 }}>&quot;{testimonial.quote}&quot;</p>
          <p className="mt-4 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}>— {testimonial.author}</p>
        </div>
      </motion.section>
    );
  }

  if (theme.key === 'mothercare') {
    return (
      <motion.section initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="mx-auto max-w-2xl px-6 py-16 text-center md:px-10">
        <Quote size={30} style={{ color: 'var(--color-accent)' }} className="mx-auto mb-4" />
        <p className="font-semibold" style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--color-foreground)', lineHeight: 1.4 }}>&quot;{testimonial.quote}&quot;</p>
        <div className="mt-4 flex justify-center gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} size={14} fill="var(--color-accent)" color="var(--color-accent)" strokeWidth={0} />
          ))}
        </div>
        <p className="mt-3 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>— {testimonial.author}</p>
      </motion.section>
    );
  }

  // mednova
  return (
    <motion.section initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="mx-auto max-w-2xl px-6 py-16 text-center md:px-10">
      <div className="mb-4 flex justify-center gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={16} fill="var(--color-accent)" color="var(--color-accent)" strokeWidth={0} />
        ))}
      </div>
      <p className="font-semibold" style={{ fontFamily: 'var(--font-body)', fontSize: 22, color: 'var(--color-foreground)', lineHeight: 1.4 }}>&quot;{testimonial.quote}&quot;</p>
      <p className="mt-4 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>— {testimonial.author}</p>
    </motion.section>
  );
}
