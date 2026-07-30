'use client';

import { Clock, Facebook, Instagram, MapPin, Phone, Youtube } from 'lucide-react';
import Link from 'next/link';
import type { BusinessInfo } from '@locallaunch/config-schema';
import { useTemplateBasePath } from './TemplateBasePath';

const QUICK_LINKS = [
  { label: 'Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
];

export function Footer({ business }: { business: BusinessInfo }) {
  const basePath = useTemplateBasePath();

  return (
    <footer className="px-6 py-10 md:px-10" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--color-foreground)' }}>
            {business.name}
          </div>
          <p className="mt-2 flex items-center gap-2 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            <MapPin size={13} /> {business.city}
          </p>
          <p className="mt-1 flex items-center gap-2 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            <Clock size={13} /> {business.hours}
          </p>
          <a
            href={`tel:${business.phone.replace(/[^\d+]/g, '')}`}
            className="mt-1 flex items-center gap-2 text-sm hover:underline"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}
          >
            <Phone size={13} /> {business.phone}
          </a>
          <div className="mt-4 flex gap-4" style={{ color: 'var(--color-muted)' }}>
            {business.socials.instagram && (
              <a href={business.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            )}
            {business.socials.facebook && (
              <a href={business.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            )}
            {business.socials.youtube && (
              <a href={business.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            )}
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', letterSpacing: 1 }}>
            More
          </p>
          <ul className="space-y-2 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={`${basePath}${link.href}`}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', letterSpacing: 1 }}>
            Legal
          </p>
          <ul className="space-y-2 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={`${basePath}${link.href}`}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
