'use client';

import { useTheme } from '@locallaunch/theme-engine';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Plus } from 'lucide-react';
import { useState } from 'react';
import type { Faq as FaqConfig } from '@locallaunch/config-schema';

function FaqItem({
  faq,
  index,
  variant,
}: {
  faq: FaqConfig;
  index: number;
  variant: 'chevron' | 'plus';
}) {
  const [open, setOpen] = useState(index === 0);
  const Icon = variant === 'plus' ? Plus : ChevronDown;

  return (
    <div className="border-t py-5 first:pt-0" style={{ borderColor: 'var(--color-border)' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: variant === 'plus' ? (open ? 45 : 0) : open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
          style={{ color: 'var(--color-accent)' }}
        >
          <Icon size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq({ faqs }: { faqs: FaqConfig[] }) {
  const theme = useTheme();
  if (faqs.length === 0) return null;

  const variant = theme.key === 'minimal' ? 'plus' : 'chevron';
  const heading = 'Frequently Asked Questions';

  if (theme.key === 'minimal') {
    return (
      <section className="mx-auto max-w-2xl px-6 py-16 md:px-10">
        <h2 className="mb-8 text-2xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
          {heading}
        </h2>
        <div>
          {faqs.map((faq, index) => (
            <FaqItem key={faq.question} faq={faq} index={index} variant={variant} />
          ))}
        </div>
      </section>
    );
  }

  if (theme.key === 'dark') {
    return (
      <section className="mx-auto max-w-2xl px-6 py-16 md:px-10">
        <h2 className="mb-8 text-center text-3xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>
          {heading}
        </h2>
        <div className="px-5" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
          {faqs.map((faq, index) => (
            <FaqItem key={faq.question} faq={faq} index={index} variant={variant} />
          ))}
        </div>
      </section>
    );
  }

  if (theme.key === 'neon') {
    return (
      <section className="mx-auto max-w-2xl px-6 py-16 md:px-10">
        <h2 className="mb-8 text-center text-3xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>
          {heading}
        </h2>
        <div
          className="px-5"
          style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-accent)', borderRadius: 'var(--radius-md)' }}
        >
          {faqs.map((faq, index) => (
            <FaqItem key={faq.question} faq={faq} index={index} variant={variant} />
          ))}
        </div>
      </section>
    );
  }

  if (theme.key === 'gold') {
    return (
      <section className="mx-auto max-w-2xl px-6 py-16 md:px-10">
        <h2 className="mb-8 text-center text-3xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>
          {heading}
        </h2>
        <div>
          {faqs.map((faq, index) => (
            <FaqItem key={faq.question} faq={faq} index={index} variant={variant} />
          ))}
        </div>
      </section>
    );
  }

  // orange (Titan)
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 md:px-10">
      <h2 className="mb-8 text-center text-3xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>
        {heading}
      </h2>
      <div className="px-6" style={{ backgroundColor: 'var(--color-surface-alt)', borderRadius: 'var(--radius-lg)' }}>
        {faqs.map((faq, index) => (
          <FaqItem key={faq.question} faq={faq} index={index} variant={variant} />
        ))}
      </div>
    </section>
  );
}
