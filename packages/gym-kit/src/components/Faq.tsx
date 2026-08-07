'use client';

import { useTheme } from '@locallaunch/theme-engine';
import type { Faq as FaqConfig } from '@locallaunch/config-schema';
import { AccordionBoxed, AccordionLineList } from './Accordion';

// Shuffled per theme so the FAQ section doesn't read as one recipe with a
// palette swap — dark/minimal get the quiet divided-list treatment, the more
// ornate/card-driven themes (gold, orange, neon) get boxed cards.
const LINE_LIST_THEMES = new Set(['dark', 'minimal']);

export function Faq({ faqs }: { faqs: FaqConfig[] }) {
  const theme = useTheme();
  if (faqs.length === 0) return null;

  const centered = theme.key === 'gold';

  return (
    <section className="mx-auto max-w-2xl px-6 py-16 md:px-10">
      <h2
        className={centered ? 'mb-8 text-center text-3xl' : 'mb-8 text-3xl'}
        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}
      >
        Frequently Asked Questions
      </h2>
      {LINE_LIST_THEMES.has(theme.key) ? <AccordionLineList faqs={faqs} /> : <AccordionBoxed faqs={faqs} />}
    </section>
  );
}
