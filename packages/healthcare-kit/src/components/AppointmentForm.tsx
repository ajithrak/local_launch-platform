'use client';

import { Button, Card } from '@locallaunch/ui';
import { Clock, Mail, MapPin, Phone, PhoneCall } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import type { BusinessInfo, Department, Doctor } from '@locallaunch/config-schema';
import { MapEmbed } from './MapEmbed';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

interface AppointmentFormProps {
  business: BusinessInfo;
  doctors: Doctor[];
  departments: Department[];
  emergencyPhone?: string;
  /** Pre-select a doctor, e.g. when booking is launched from that doctor's profile page. */
  preselectedDoctorSlug?: string;
  /**
   * This app's Next.js `basePath`, if it has one (e.g. the multi-template
   * demo app serves everything under '/clinic'). fetch() to API routes does
   * NOT get basePath auto-prepended the way <Link> does, so callers whose
   * app config sets a basePath must pass it here. Standalone client sites
   * deployed at their own domain have no basePath and can omit this.
   */
  apiBasePath?: string;
}

export function AppointmentForm({
  business,
  doctors,
  departments,
  emergencyPhone,
  preselectedDoctorSlug,
  apiBasePath = '',
}: AppointmentFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [department, setDepartment] = useState(departments[0]?.name ?? '');
  const [doctor, setDoctor] = useState(preselectedDoctorSlug ?? '');
  const [notes, setNotes] = useState('');
  const [company, setCompany] = useState(''); // honeypot — always left blank by real visitors
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const doctorName = doctors.find((d) => d.slug === doctor)?.name ?? doctor;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    try {
      const res = await fetch(`${apiBasePath}/api/appointment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          preferredDate,
          preferredTime,
          department,
          doctor: doctorName,
          notes,
          business: business.name,
          company,
        }),
      });
      const data: { ok: boolean; error?: string } = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? 'Something went wrong. Please try again.');
      }
      setStatus('success');
      setName('');
      setPhone('');
      setEmail('');
      setPreferredDate('');
      setPreferredTime('');
      setNotes('');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  const inputStyle = {
    borderColor: 'var(--color-border)',
    backgroundColor: 'var(--color-surface-alt)',
    borderRadius: 'var(--radius-sm)',
  };

  return (
    <section className="grid grid-cols-1 gap-6 px-6 pb-16 md:grid-cols-2 md:px-10">
      <Card>
        <h2 className="mb-4 text-lg font-semibold" style={{ fontFamily: 'var(--font-body)' }}>Book an Appointment</h2>
        {status === 'success' ? (
          <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}>
            Thanks — your appointment request has been sent. Our team will confirm your slot shortly.
          </p>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs" style={{ color: 'var(--color-muted)' }}>Full name</label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full border px-3 py-2 text-sm" style={inputStyle} />
              </div>
              <div>
                <label className="mb-1 block text-xs" style={{ color: 'var(--color-muted)' }}>Phone</label>
                <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Your phone number" className="w-full border px-3 py-2 text-sm" style={inputStyle} />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs" style={{ color: 'var(--color-muted)' }}>Email (optional)</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full border px-3 py-2 text-sm" style={inputStyle} />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs" style={{ color: 'var(--color-muted)' }}>Preferred date</label>
                <input type="date" required value={preferredDate} onChange={(e) => setPreferredDate(e.target.value)} className="w-full border px-3 py-2 text-sm" style={inputStyle} />
              </div>
              <div>
                <label className="mb-1 block text-xs" style={{ color: 'var(--color-muted)' }}>Preferred time</label>
                <input type="time" required value={preferredTime} onChange={(e) => setPreferredTime(e.target.value)} className="w-full border px-3 py-2 text-sm" style={inputStyle} />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs" style={{ color: 'var(--color-muted)' }}>Department</label>
                <select required value={department} onChange={(e) => setDepartment(e.target.value)} className="w-full border px-3 py-2 text-sm" style={inputStyle}>
                  {departments.map((dept) => (
                    <option key={dept.name} value={dept.name}>{dept.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-xs" style={{ color: 'var(--color-muted)' }}>Doctor (optional)</label>
                <select value={doctor} onChange={(e) => setDoctor(e.target.value)} className="w-full border px-3 py-2 text-sm" style={inputStyle}>
                  <option value="">No preference</option>
                  {doctors.map((doc) => (
                    <option key={doc.slug} value={doc.slug}>{doc.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs" style={{ color: 'var(--color-muted)' }}>Notes (optional)</label>
              <textarea rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Anything the doctor should know before your visit" className="w-full border px-3 py-2 text-sm" style={inputStyle} />
            </div>
            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            {status === 'error' && error && <p className="text-xs" style={{ color: '#dc2626' }}>{error}</p>}
            <Button type="submit" className="w-full" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : 'Book Appointment'}
            </Button>
          </form>
        )}
      </Card>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-3">
          <a
            href={`tel:${business.phone.replace(/[^\d+]/g, '')}`}
            className="flex flex-col items-center justify-center gap-1.5 rounded-[var(--radius-md)] py-5 text-sm font-semibold"
            style={{ backgroundColor: 'var(--color-surface-alt)', color: 'var(--color-foreground)' }}
          >
            <Phone size={18} style={{ color: 'var(--color-accent)' }} /> Call Us
          </a>
          <a
            href={`https://wa.me/${business.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center gap-1.5 rounded-[var(--radius-md)] py-5 text-sm font-semibold"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-contrast)' }}
          >
            <PhoneCall size={18} /> WhatsApp
          </a>
        </div>

        <Card>
          <h2 className="mb-4 text-lg font-semibold" style={{ fontFamily: 'var(--font-body)' }}>Clinic Details</h2>
          <ul className="space-y-3 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} /> {business.address ?? business.city}
            </li>
            <li className="flex items-center gap-2">
              <Clock size={16} style={{ color: 'var(--color-accent)' }} /> {business.hours}
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
        </Card>

        <MapEmbed address={business.address} city={business.city} businessName={business.name} className="h-48" />
      </div>
    </section>
  );
}
