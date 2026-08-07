'use client';

import { Award, Clock, GraduationCap, Languages, Stethoscope } from 'lucide-react';
import type { Doctor } from '@locallaunch/config-schema';
import { useAssetBasePath } from './TemplateBasePath';

export function DoctorDetail({ doctor }: { doctor: Doctor }) {
  const assetBasePath = useAssetBasePath();

  return (
    <section className="grid grid-cols-1 gap-10 px-6 pb-16 md:grid-cols-3 md:px-10">
      <div className="md:col-span-1">
        {doctor.photo ? (
          <img src={`${assetBasePath}${doctor.photo}`} alt={doctor.name} className="aspect-square w-full rounded-[var(--radius-lg)] object-cover" />
        ) : (
          <div className="flex aspect-square w-full items-center justify-center rounded-[var(--radius-lg)]" style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 14%, transparent)' }}>
            <Stethoscope size={48} style={{ color: 'var(--color-accent)' }} />
          </div>
        )}
        <div className="mt-5 space-y-2.5 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
          <p className="flex items-center gap-2">
            <Award size={15} style={{ color: 'var(--color-accent)' }} /> Reg. No. {doctor.registrationNumber}
          </p>
          {doctor.languages.length > 0 && (
            <p className="flex items-center gap-2">
              <Languages size={15} style={{ color: 'var(--color-accent)' }} /> {doctor.languages.join(', ')}
            </p>
          )}
          <p className="flex items-center gap-2">
            <Clock size={15} style={{ color: 'var(--color-accent)' }} /> {doctor.availability}
          </p>
        </div>
      </div>

      <div className="md:col-span-2">
        <p className="mb-1 text-sm font-semibold" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}>{doctor.role}</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--color-foreground)' }}>{doctor.name}</h1>
        <p className="mt-1 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{doctor.qualification} · {doctor.experienceYears}+ years experience</p>

        <p className="mt-6 leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-foreground)' }}>{doctor.bio}</p>

        {doctor.specialties.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {doctor.specialties.map((s) => (
              <span key={s} className="rounded-full px-3 py-1 text-xs font-medium" style={{ backgroundColor: 'var(--color-surface-alt)', color: 'var(--color-foreground)', fontFamily: 'var(--font-body)' }}>
                {s}
              </span>
            ))}
          </div>
        )}

        {doctor.education.length > 0 && (
          <div className="mt-8">
            <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', letterSpacing: 1 }}>
              <GraduationCap size={16} style={{ color: 'var(--color-accent)' }} /> Education
            </h2>
            <ul className="space-y-1.5 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-foreground)' }}>
              {doctor.education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {doctor.awards.length > 0 && (
          <div className="mt-6">
            <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', letterSpacing: 1 }}>
              <Award size={16} style={{ color: 'var(--color-accent)' }} /> Awards &amp; Recognition
            </h2>
            <ul className="space-y-1.5 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-foreground)' }}>
              {doctor.awards.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
