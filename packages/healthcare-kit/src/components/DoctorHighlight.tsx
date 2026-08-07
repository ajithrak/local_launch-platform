'use client';

import { useTheme } from '@locallaunch/theme-engine';
import { motion } from 'framer-motion';
import { Award, Languages, Stethoscope } from 'lucide-react';
import Link from 'next/link';
import type { Doctor } from '@locallaunch/config-schema';
import { useAssetBasePath, useTemplateBasePath } from './TemplateBasePath';

export function DoctorHighlight({ doctor }: { doctor: Doctor }) {
  const theme = useTheme();
  const basePath = useTemplateBasePath();
  const assetBasePath = useAssetBasePath();

  const photoBox = (className: string) =>
    doctor.photo ? (
      <img src={`${assetBasePath}${doctor.photo}`} alt={doctor.name} className={`${className} object-cover`} />
    ) : (
      <div className={`${className} flex items-center justify-center`} style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 14%, transparent)' }}>
        <Stethoscope size={40} style={{ color: 'var(--color-accent)' }} />
      </div>
    );

  const containerRadius =
    theme.key === 'orthoedge' ? '4px' : theme.key === 'mednova' ? '22px' : theme.key === 'mothercare' ? '32px' : 'var(--radius-lg)';

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="px-6 py-16 md:px-10"
    >
      <div
        className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 overflow-hidden md:grid-cols-2"
        style={{
          backgroundColor: theme.card.glass ? 'color-mix(in srgb, var(--color-surface) 65%, transparent)' : 'var(--color-surface)',
          border: theme.card.border,
          borderRadius: containerRadius,
        }}
      >
        {photoBox('h-72 w-full md:h-full')}
        <div className="p-8 md:p-10">
          <p className="mb-2 text-xs font-semibold uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)', letterSpacing: 1.5 }}>
            Meet Your Doctor
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--color-foreground)' }}>
            {doctor.name}
          </h2>
          <p className="mt-1 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            {doctor.role} · {doctor.qualification}
          </p>
          <p className="mt-4 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            {doctor.bio}
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            <span className="flex items-center gap-1.5"><Award size={14} style={{ color: 'var(--color-accent)' }} /> {doctor.experienceYears}+ years experience</span>
            {doctor.languages.length > 0 && (
              <span className="flex items-center gap-1.5"><Languages size={14} style={{ color: 'var(--color-accent)' }} /> {doctor.languages.join(', ')}</span>
            )}
          </div>
          <Link
            href={`${basePath}/doctors/${doctor.slug}`}
            className="mt-6 inline-block rounded-full px-6 py-2.5 text-sm font-semibold transition hover:brightness-110"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-contrast)', fontFamily: 'var(--font-body)' }}
          >
            View Profile &amp; Book
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
