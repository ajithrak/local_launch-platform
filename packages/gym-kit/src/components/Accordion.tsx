'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Plus } from 'lucide-react';
import { useState } from 'react';
import type { Faq as FaqConfig } from '@locallaunch/config-schema';

/**
 * Two structurally different accordion "recipes" so not every theme reads as
 * the same component with different colors — see Faq.tsx for which theme
 * uses which. Both take the same props so they're interchangeable.
 */
interface AccordionProps {
  faqs: FaqConfig[];
}

/** Recipe A: a single divided list, chevron toggle — quiet and editorial. */
export function AccordionLineList({ faqs }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div
      className="rounded-[var(--radius-lg)] px-5 py-1"
      style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
    >
      {faqs.map((faq, index) => {
        const open = openIndex === index;
        return (
          <div key={faq.question} className="border-t py-5 first:border-t-0 first:pt-0" style={{ borderColor: 'var(--color-border)' }}>
            <button
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={open}
            >
              <span className="font-semibold" style={{ fontFamily: 'var(--font-body)' }}>{faq.question}</span>
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
                style={{ color: 'var(--color-accent)' }}
              >
                <ChevronDown size={18} />
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
      })}
    </div>
  );
}

/** Recipe B: independently boxed cards, plus toggle — each question its own object, not a list row. */
export function AccordionBoxed({ faqs }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const open = openIndex === index;
        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-[var(--radius-lg)] px-5 py-4 transition-colors"
            style={{
              backgroundColor: open ? 'color-mix(in srgb, var(--color-accent) 8%, var(--color-surface))' : 'var(--color-surface)',
              border: '1px solid var(--color-border)',
            }}
          >
            <button
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full items-center gap-3 text-left"
              aria-expanded={open}
            >
              <motion.span
                animate={{ rotate: open ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 16%, transparent)', color: 'var(--color-accent)' }}
              >
                <Plus size={14} />
              </motion.span>
              <span className="font-semibold" style={{ fontFamily: 'var(--font-body)' }}>{faq.question}</span>
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
                  <p className="ml-9 pt-3 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
