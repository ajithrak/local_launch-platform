'use client';

import { buttonVariants } from '@locallaunch/ui';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import type { Service } from '@locallaunch/config-schema';
import { Faq } from './Faq';
import { useTemplateBasePath } from './TemplateBasePath';

function ListBlock({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h2 className="mb-3 text-lg font-semibold" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-foreground)' }}>{title}</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServiceDetail({ service, relatedServices }: { service: Service; relatedServices: Service[] }) {
  const basePath = useTemplateBasePath();

  return (
    <>
      <section className="px-6 pb-12 md:px-10">
        <p className="mb-2 text-sm font-semibold" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}>{service.tagline}</p>
        <p className="max-w-2xl leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{service.overview}</p>
        <Link href={`${basePath}/appointment`} className={buttonVariants({ size: 'md' })} style={{ fontFamily: 'var(--font-body)', marginTop: 24, display: 'inline-flex' }}>
          Book This Service
        </Link>
      </section>

      <section className="grid grid-cols-1 gap-10 px-6 pb-16 md:grid-cols-2 md:px-10">
        <ListBlock title="Symptoms" items={service.symptoms} />
        <ListBlock title="Procedure" items={service.procedure} />
        <ListBlock title="Benefits" items={service.benefits} />
        {service.recovery && (
          <div>
            <h2 className="mb-3 text-lg font-semibold" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-foreground)' }}>Recovery</h2>
            <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{service.recovery}</p>
          </div>
        )}
      </section>

      <Faq faqs={service.faqs} />

      {relatedServices.length > 0 && (
        <section className="px-6 pb-16 md:px-10">
          <h2 className="mb-5 text-lg font-semibold" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-foreground)' }}>Related Treatments</h2>
          <div className="flex flex-wrap gap-3">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`${basePath}/services/${related.slug}`}
                className="rounded-full px-4 py-2 text-sm font-medium"
                style={{ backgroundColor: 'var(--color-surface-alt)', color: 'var(--color-foreground)', fontFamily: 'var(--font-body)' }}
              >
                {related.name}
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
