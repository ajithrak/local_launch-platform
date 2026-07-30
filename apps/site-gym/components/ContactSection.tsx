'use client';

import { Button, Card } from '@locallaunch/ui';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import type { BusinessInfo } from '@locallaunch/config-schema';
import { APP_BASE_PATH } from '@/lib/basePath';
import { MapEmbed } from './MapEmbed';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactSection({ business }: { business: BusinessInfo }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [company, setCompany] = useState(''); // honeypot — always left blank by real visitors
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    try {
      const res = await fetch(`${APP_BASE_PATH}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, business: business.name, company }),
      });
      const data: { ok: boolean; error?: string } = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? 'Something went wrong. Please try again.');
      }
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="grid grid-cols-1 gap-6 px-6 pb-16 md:grid-cols-2 md:px-10">
      <Card>
        <h2 className="mb-4 text-lg font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
          Send us a message
        </h2>
        {status === 'success' ? (
          <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}>
            Thanks — your message has been sent. We'll get back to you soon.
          </p>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="mb-1 block text-xs" style={{ color: 'var(--color-muted)' }}>
                Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you're looking for..."
                className="w-full rounded-[var(--radius-sm)] border px-3 py-2 text-sm"
                style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface-alt)' }}
              />
            </div>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            {status === 'error' && error && (
              <p className="text-xs" style={{ color: '#dc2626' }}>
                {error}
              </p>
            )}
            <Button type="submit" className="w-full" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : 'Send message'}
            </Button>
          </form>
        )}
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
              <Phone size={16} style={{ color: 'var(--color-accent)' }} />
              <a href={`tel:${business.phone.replace(/[^\d+]/g, '')}`} className="hover:underline">
                {business.phone}
              </a>
            </li>
            {business.email && (
              <li className="flex items-center gap-2">
                <Mail size={16} style={{ color: 'var(--color-accent)' }} />
                <a href={`mailto:${business.email}`} className="hover:underline">
                  {business.email}
                </a>
              </li>
            )}
          </ul>
        </Card>

        <MapEmbed address={business.address} city={business.city} businessName={business.name} className="h-48" />
      </div>
    </section>
  );
}
