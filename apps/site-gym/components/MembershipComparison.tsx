'use client';

import { useTheme } from '@locallaunch/theme-engine';
import { Check } from 'lucide-react';
import type { MembershipPlan } from '@locallaunch/config-schema';

const EVERYTHING_IN = /^Everything in (.+)$/;

/** Expands each plan's "Everything in X" shorthand into the full, deduped feature list it implies. */
function resolveEffectiveFeatures(plan: MembershipPlan, plans: MembershipPlan[], seen = new Set<string>()): string[] {
  if (seen.has(plan.name)) return [];
  seen.add(plan.name);

  const resolved: string[] = [];
  for (const feature of plan.features) {
    const match = feature.match(EVERYTHING_IN);
    if (match) {
      const parentPlan = plans.find((p) => p.name === match[1]);
      if (parentPlan) resolved.push(...resolveEffectiveFeatures(parentPlan, plans, seen));
    } else {
      resolved.push(feature);
    }
  }
  return resolved;
}

export function MembershipComparison({ plans }: { plans: MembershipPlan[] }) {
  const theme = useTheme();
  if (plans.length < 2) return null;

  const effectiveByPlan = plans.map((plan) => new Set(resolveEffectiveFeatures(plan, plans)));
  const rows: string[] = [];
  effectiveByPlan.forEach((features) => {
    features.forEach((feature) => {
      if (!rows.includes(feature)) rows.push(feature);
    });
  });

  const headerBg = theme.key === 'gold' || theme.key === 'minimal' ? 'transparent' : 'var(--color-surface-alt)';

  return (
    <section className="px-6 pb-16 md:px-10">
      <div className="mx-auto max-w-4xl overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-sm" style={{ fontFamily: 'var(--font-body)' }}>
          <thead>
            <tr style={{ backgroundColor: headerBg }}>
              <th className="p-3 text-left font-semibold" style={{ color: 'var(--color-muted)' }}>
                Compare plans
              </th>
              {plans.map((plan) => (
                <th
                  key={plan.name}
                  className="p-3 text-center font-semibold"
                  style={{ color: plan.featured ? 'var(--color-accent)' : 'var(--color-foreground)' }}
                >
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((feature, index) => (
              <tr key={feature} style={{ backgroundColor: index % 2 === 1 ? headerBg : 'transparent' }}>
                <td className="border-t p-3" style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted)' }}>
                  {feature}
                </td>
                {effectiveByPlan.map((features, planIndex) => (
                  <td
                    key={plans[planIndex]!.name}
                    className="border-t p-3 text-center"
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    {features.has(feature) && (
                      <Check size={16} className="mx-auto" style={{ color: 'var(--color-accent)' }} />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
