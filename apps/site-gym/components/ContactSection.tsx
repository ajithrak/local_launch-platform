'use client';

import { Button, Card } from '@locallaunch/ui';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import type { BusinessInfo } from '@locallaunch/config-schema';

export function ContactSection({ business }: { business: BusinessInfo }) {
  return (
    <section className="grid grid-cols-1 gap-6 px-6 pb-16 md:grid-cols-2 md:px-10">
      <Card>
        <h2 className="mb-4 text-lg font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
          Send us a message
        </h2>
        <form
          className="space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="mb-1 block text-xs" style={{ color: 'var(--color-muted)' }}>
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-[var(--radius-sm)] border px-3 py-2 text-sm"
              style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface-alt)' }}
            />
          </div>
          <div>
            <label className="mb-1 block text-xs" style={{ color: 'var(--color-muted)' }}>
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-[var(--radius-sm)] border px-3 py-2 text-sm"
              style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface-alt)' }}
            />
          </div>
          <div>
            <label className="mb-1 block text-xs" style={{ color: 'var(--color-muted)' }}>
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell us what you're looking for..."
              className="w-full rounded-[var(--radius-sm)] border px-3 py-2 text-sm"
              style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface-alt)' }}
            />
          </div>
          <Button type="submit" className="w-full">
            Send message
          </Button>
        </form>
      </Card>

      <div className="space-y-6">
        <Card>
          <h2 className="mb-4 text-lg font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
            Visit or reach out
          </h2>
          <ul className="space-y-3 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            <li className="flex items-center gap-2">
              <MapPin size={16} style={{ color: 'var(--color-accent)' }} /> {business.city}
            </li>
            <li className="flex items-center gap-2">
              <Clock size={16} style={{ color: 'var(--color-accent)' }} /> {business.hours}
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} style={{ color: 'var(--color-accent)' }} /> {business.phone}
            </li>
            {business.email && (
              <li className="flex items-center gap-2">
                <Mail size={16} style={{ color: 'var(--color-accent)' }} /> {business.email}
              </li>
            )}
          </ul>
        </Card>

        <div
          aria-hidden
          className="flex h-48 items-center justify-center text-sm"
          style={{
            backgroundColor: 'var(--color-surface-alt)',
            color: 'var(--color-muted)',
            borderRadius: 'var(--radius-lg)',
          }}
        >
          Map preview
        </div>
      </div>
    </section>
  );
}
