'use client';

import { Card } from '@locallaunch/ui';
import { Clock, Facebook, Instagram, Mail, MapPin, Phone, PhoneCall, Youtube } from 'lucide-react';
import type { BusinessInfo } from '@locallaunch/config-schema';
import { MapEmbed } from './MapEmbed';

export function ContactDetails({ business, emergencyPhone }: { business: BusinessInfo; emergencyPhone?: string }) {
  return (
    <section className="grid grid-cols-1 gap-6 px-6 pb-16 md:grid-cols-2 md:px-10">
      <Card>
        <h2 className="mb-4 text-lg font-semibold" style={{ fontFamily: 'var(--font-body)' }}>Reach Us Directly</h2>
        <ul className="space-y-3 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
          <li className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} /> {business.address ?? business.city}
          </li>
          <li className="flex items-center gap-2">
            <Clock size={16} style={{ color: 'var(--color-accent)' }} /> {business.hours}
          </li>
          <li className="flex items-center gap-2">
            <Phone size={16} style={{ color: 'var(--color-accent)' }} />
            <a href={`tel:${business.phone.replace(/[^\d+]/g, '')}`} className="hover:underline">{business.phone}</a>
          </li>
          <li className="flex items-center gap-2">
            <PhoneCall size={16} style={{ color: 'var(--color-accent)' }} />
            <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer" className="hover:underline">WhatsApp us</a>
          </li>
          {business.email && (
            <li className="flex items-center gap-2">
              <Mail size={16} style={{ color: 'var(--color-accent)' }} />
              <a href={`mailto:${business.email}`} className="hover:underline">{business.email}</a>
            </li>
          )}
          {emergencyPhone && (
            <li className="flex items-center gap-2 font-semibold" style={{ color: 'var(--color-accent)' }}>
              <PhoneCall size={16} /> Emergency: {emergencyPhone}
            </li>
          )}
        </ul>
        {(business.socials.instagram || business.socials.facebook || business.socials.youtube) && (
          <div className="mt-5 flex gap-4" style={{ color: 'var(--color-muted)' }}>
            {business.socials.instagram && (
              <a href={business.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
            )}
            {business.socials.facebook && (
              <a href={business.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
            )}
            {business.socials.youtube && (
              <a href={business.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={18} /></a>
            )}
          </div>
        )}
        <p className="mt-5 text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
          Complimentary on-site parking is available for all patients.
        </p>
      </Card>
      <MapEmbed address={business.address} city={business.city} businessName={business.name} className="h-64 md:h-full" />
    </section>
  );
}
