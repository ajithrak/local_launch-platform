'use client';

import { Card } from '@locallaunch/ui';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { MembershipPlan } from '@locallaunch/config-schema';

export function Membership({ plans }: { plans: MembershipPlan[] }) {
  return (
    <section className="px-6 pb-16 md:px-10">
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <Card
              className="h-full"
              style={plan.featured ? { borderColor: 'var(--color-accent)', borderWidth: 2 } : undefined}
            >
              <div className="mb-4" style={{ color: plan.featured ? 'var(--color-accent)' : 'var(--color-foreground)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22 }}>{plan.name}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 34 }}>
                  {plan.price}
                  <span className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                    {plan.period}
                  </span>
                </div>
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}
                  >
                    <ChevronRight size={14} style={{ color: 'var(--color-accent)', marginTop: 3 }} /> {feature}
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-2.5 text-sm font-semibold transition hover:brightness-110 active:scale-[0.98]"
                style={{
                  backgroundColor: plan.featured ? 'var(--color-accent)' : 'transparent',
                  color: plan.featured ? 'var(--color-accent-contrast)' : 'var(--color-foreground)',
                  border: plan.featured ? 'none' : '1px solid var(--color-muted)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                Choose {plan.name}
              </button>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
