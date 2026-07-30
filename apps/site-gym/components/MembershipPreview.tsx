'use client';

import { Card } from '@locallaunch/ui';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star } from 'lucide-react';
import Link from 'next/link';
import type { MembershipPlan } from '@locallaunch/config-schema';
import { useTemplateBasePath } from './TemplateBasePath';

export function MembershipPreview({ plans }: { plans: MembershipPlan[] }) {
  const basePath = useTemplateBasePath();

  return (
    <section className="px-6 py-16 md:px-10">
      <h2
        className="mb-10 text-center text-3xl"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}
      >
        Membership
      </h2>
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <Link href={`${basePath}/membership`} className="relative block">
              {plan.featured && (
                <span
                  className="absolute -top-3 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-1 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    color: 'var(--color-accent-contrast)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  <Star size={10} fill="currentColor" /> Most Popular
                </span>
              )}
              <Card
                className="h-full text-center transition hover:-translate-y-1"
                style={plan.featured ? { borderColor: 'var(--color-accent)', borderWidth: 2 } : undefined}
              >
                <p className="mb-1 font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                  {plan.name}
                </p>
                <p className="mb-4 text-lg" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)' }}>
                  {plan.price}
                  <span className="text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                    {plan.period}
                  </span>
                </p>
                <ul className="mb-4 space-y-1.5 text-left">
                  {plan.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-1.5 text-xs"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}
                    >
                      <Check size={12} style={{ color: 'var(--color-accent)', marginTop: 2, flexShrink: 0 }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <span
                  className="inline-flex items-center gap-1 text-xs font-semibold"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}
                >
                  View Details <ArrowRight size={12} />
                </span>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
