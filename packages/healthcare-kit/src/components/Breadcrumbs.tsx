'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useTemplateBasePath } from './TemplateBasePath';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const basePath = useTemplateBasePath();

  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 px-6 pt-8 text-xs md:px-10" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-1.5">
          {index > 0 && <ChevronRight size={12} />}
          {item.href ? (
            <Link href={`${basePath}${item.href}`} className="hover:underline">
              {item.label}
            </Link>
          ) : (
            <span style={{ color: 'var(--color-foreground)' }}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
