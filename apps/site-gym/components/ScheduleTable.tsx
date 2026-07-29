'use client';

import { useTheme } from '@locallaunch/theme-engine';
import { Card } from '@locallaunch/ui';
import { motion } from 'framer-motion';
import { useState } from 'react';
import type { ClassScheduleItem } from '@locallaunch/config-schema';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function ScheduleTable({ schedule }: { schedule: ClassScheduleItem[] }) {
  const theme = useTheme();
  const daysWithClasses = DAYS.filter((day) => schedule.some((item) => item.day === day));
  const [activeDay, setActiveDay] = useState<string>('All');

  const filtered = activeDay === 'All' ? schedule : schedule.filter((item) => item.day === activeDay);

  return (
    <section className="px-6 pb-16 md:px-10">
      <div className="mb-6 flex flex-wrap gap-1.5">
        {['All', ...daysWithClasses].map((day) => {
          const isActive = day === activeDay;
          return (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className="rounded-full px-3 py-1.5 text-xs font-medium transition-colors"
              style={{
                fontFamily: 'var(--font-body)',
                backgroundColor: isActive ? 'var(--color-accent)' : 'var(--color-surface-alt)',
                color: isActive ? 'var(--color-accent-contrast)' : 'var(--color-muted)',
              }}
            >
              {day}
            </button>
          );
        })}
      </div>

      <Card className="overflow-hidden p-0">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left" style={{ borderBottom: '1px solid var(--color-border)' }}>
              <th className="px-5 py-3 font-medium" style={{ color: 'var(--color-muted)' }}>
                Day
              </th>
              <th className="px-5 py-3 font-medium" style={{ color: 'var(--color-muted)' }}>
                Time
              </th>
              <th className="px-5 py-3 font-medium" style={{ color: 'var(--color-muted)' }}>
                Class
              </th>
              <th className="px-5 py-3 font-medium" style={{ color: 'var(--color-muted)' }}>
                Trainer
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item, index) => (
              <motion.tr
                key={`${item.day}-${item.time}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                style={{ borderTop: index === 0 ? undefined : '1px solid var(--color-border)' }}
              >
                <td className="px-5 py-3 font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                  {item.day}
                </td>
                <td className="px-5 py-3" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                  {item.time}
                </td>
                <td className="px-5 py-3" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}>
                  {item.className}
                </td>
                <td className="px-5 py-3" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                  {item.trainer}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </Card>

      {theme.card.ornate && (
        <p className="mt-4 text-center text-xs italic" style={{ color: 'var(--color-muted)' }}>
          Schedule subject to holiday adjustments.
        </p>
      )}
    </section>
  );
}
