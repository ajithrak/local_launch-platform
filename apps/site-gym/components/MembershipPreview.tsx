'use client';

import { Card } from '@locallaunch/ui';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
            <Link href={`${basePath}/membership`}>
              <Card
                className="h-full text-center transition hover:-translate-y-1"
                style={plan.featured ? { borderColor: 'var(--color-accent)', borderWidth: 2 } : undefined}
              >
                <p className="mb-1 font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                  {plan.name}
                </p>
                <p className="mb-4 text-lg" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)' }}>
                  {plan.price}
                  <span className="text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                    {plan.period}
                  </span>
                </p>
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
