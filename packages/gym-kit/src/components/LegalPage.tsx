'use client';

import { useTheme } from '@locallaunch/theme-engine';
import type { LegalPage as LegalPageConfig } from '@locallaunch/config-schema';

export function LegalPage({ legal }: { legal: LegalPageConfig }) {
  const theme = useTheme();

  if (theme.key === 'minimal') {
    return (
      <section className="mx-auto max-w-2xl px-6 pb-16 md:px-10">
        <p className="mb-10 text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
          Last updated {legal.lastUpdated}
        </p>
        <div>
          {legal.sections.map((section) => (
            <div key={section.heading} className="border-t py-8 first:pt-0" style={{ borderColor: 'var(--color-border)' }}>
              <h2 className="mb-3 text-lg font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                {section.heading}
              </h2>
              <p className="leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (theme.key === 'dark') {
    return (
      <section className="mx-auto max-w-2xl px-6 pb-16 md:px-10">
        <p className="mb-8 text-xs uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', letterSpacing: 1 }}>
          Last updated {legal.lastUpdated}
        </p>
        <div className="space-y-4">
          {legal.sections.map((section) => (
            <div
              key={section.heading}
              className="border-l-4 p-5"
              style={{ borderColor: 'var(--color-accent)', backgroundColor: 'var(--color-surface)' }}
            >
              <h2 className="mb-2 text-base font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                {section.heading}
              </h2>
              <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (theme.key === 'neon') {
    return (
      <section className="mx-auto max-w-2xl px-6 pb-16 md:px-10">
        <p className="mb-8 text-xs uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)', letterSpacing: 2 }}>
          // last updated {legal.lastUpdated}
        </p>
        <div className="space-y-4">
          {legal.sections.map((section, index) => (
            <div
              key={section.heading}
              className="p-5"
              style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}
            >
              <h2 className="mb-2 flex items-center gap-2 text-base font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                <span style={{ color: 'var(--color-accent)' }}>{String(index + 1).padStart(2, '0')}</span>
                {section.heading}
              </h2>
              <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (theme.key === 'gold') {
    return (
      <section className="mx-auto max-w-2xl px-6 pb-16 md:px-10">
        <p className="mb-8 text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
          Last updated {legal.lastUpdated}
        </p>
        <div className="space-y-8">
          {legal.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="mb-2 text-lg font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                {section.heading}
              </h2>
              <p className="leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // orange (Titan)
  return (
    <section className="mx-auto max-w-2xl px-6 pb-16 md:px-10">
      <p className="mb-8 text-xs font-semibold uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)', letterSpacing: 1 }}>
        Last updated {legal.lastUpdated}
      </p>
      <div className="space-y-6">
        {legal.sections.map((section, index) => {
          const tint = index % 2 === 0 ? '--color-accent' : '--color-secondary';
          return (
            <div key={section.heading} className="p-5" style={{ backgroundColor: 'var(--color-surface-alt)', borderRadius: 'var(--radius-lg)' }}>
              <h2 className="mb-2 text-lg font-semibold" style={{ fontFamily: 'var(--font-body)', color: `var(${tint})` }}>
                {section.heading}
              </h2>
              <p className="leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                {section.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
