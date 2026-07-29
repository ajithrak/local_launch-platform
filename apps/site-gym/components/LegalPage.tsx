import type { LegalPage as LegalPageConfig } from '@locallaunch/config-schema';

export function LegalPage({ legal }: { legal: LegalPageConfig }) {
  return (
    <section className="mx-auto max-w-2xl px-6 pb-16 md:px-10">
      <p className="mb-8 text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
        Last updated {legal.lastUpdated}
      </p>
      <div className="space-y-8">
        {legal.sections.map((section) => (
          <div key={section.heading}>
            <h2 className="mb-2 text-lg font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
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
