'use client';

import { Card } from '@locallaunch/ui';
import { useTheme } from '@locallaunch/theme-engine';
import { motion } from 'framer-motion';
import { Stethoscope } from 'lucide-react';
import Link from 'next/link';
import type { Doctor } from '@locallaunch/config-schema';
import { useAssetBasePath, useTemplateBasePath } from './TemplateBasePath';

function Avatar({ doctor, className, iconSize = 24 }: { doctor: Doctor; className: string; iconSize?: number }) {
  const assetBasePath = useAssetBasePath();
  return doctor.photo ? (
    <img src={`${assetBasePath}${doctor.photo}`} alt={doctor.name} className={`${className} object-cover`} />
  ) : (
    <div className={`${className} flex items-center justify-center`} style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 14%, transparent)' }}>
      <Stethoscope size={iconSize} style={{ color: 'var(--color-accent)' }} />
    </div>
  );
}

export function Doctors({ doctors }: { doctors: Doctor[] }) {
  const theme = useTheme();
  const basePath = useTemplateBasePath();

  if (theme.key === 'mednova') {
    return (
      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {doctors.map((doctor, index) => (
            <motion.div key={doctor.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: index * 0.08 }}>
              <Link href={`${basePath}/doctors/${doctor.slug}`}>
                <Card className="h-full text-center transition hover:-translate-y-1">
                  <Avatar doctor={doctor} className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full" iconSize={28} />
                  <div className="font-semibold" style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'var(--color-foreground)' }}>{doctor.name}</div>
                  <div className="mb-1 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}>{doctor.role}</div>
                  <div className="text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{doctor.qualification}</div>
                  <div className="mt-3 text-[11px]" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                    Reg. No. {doctor.registrationNumber} · {doctor.experienceYears}+ yrs experience
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  if (theme.key === 'careplus') {
    return (
      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor, index) => (
            <motion.div key={doctor.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.4, delay: index * 0.07 }}>
              <Link href={`${basePath}/doctors/${doctor.slug}`} className="block text-center">
                <Avatar doctor={doctor} className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full" iconSize={32} />
                <div className="font-bold" style={{ fontFamily: 'var(--font-body)', fontSize: 18 }}>{doctor.name}</div>
                <div className="mb-2 text-sm font-semibold" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-secondary)' }}>{doctor.role}</div>
                <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{doctor.qualification}</p>
                {doctor.languages.length > 0 && (
                  <p className="mt-2 text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}>Speaks {doctor.languages.join(', ')}</p>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  if (theme.key === 'orthoedge') {
    return (
      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
          {doctors.map((doctor, index) => (
            <motion.div key={doctor.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.4, delay: index * 0.08 }}>
              <Link href={`${basePath}/doctors/${doctor.slug}`}>
                <div className="h-full transition hover:-translate-y-1" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                  <Avatar doctor={doctor} className="h-48 w-full" iconSize={36} />
                  <div className="p-5">
                    <div className="font-bold" style={{ fontFamily: 'var(--font-body)', fontSize: 17 }}>{doctor.name}</div>
                    <div className="mb-3 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}>{doctor.role}</div>
                    <div className="flex items-baseline justify-between border-t pt-3 text-xs" style={{ borderColor: 'var(--color-border)', fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                      <span>Reg. {doctor.registrationNumber}</span>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--color-foreground)' }}>{doctor.experienceYears}<span className="text-xs" style={{ fontFamily: 'var(--font-body)' }}> yrs</span></span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  if (theme.key === 'smilecraft') {
    return (
      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor, index) => (
            <motion.div key={doctor.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.4, delay: index * 0.08 }}>
              <Link href={`${basePath}/doctors/${doctor.slug}`}>
                <div className="h-full overflow-hidden rounded-[var(--radius-lg)]" style={{ backgroundColor: 'var(--color-surface)', boxShadow: 'var(--shadow-card)' }}>
                  <Avatar doctor={doctor} className="h-44 w-full" iconSize={32} />
                  <div className="p-5">
                    <div className="font-bold" style={{ fontFamily: 'var(--font-body)', fontSize: 17 }}>{doctor.name}</div>
                    <div className="mb-2 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}>{doctor.role}</div>
                    <p className="text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{doctor.qualification}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  // mothercare
  return (
    <section className="px-6 pb-16 md:px-10">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor, index) => (
          <motion.div key={doctor.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: index * 0.09 }}>
            <Link href={`${basePath}/doctors/${doctor.slug}`} className="block text-center">
              <Avatar doctor={doctor} className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full" iconSize={30} />
              <div className="font-bold" style={{ fontFamily: 'var(--font-display)', fontSize: 18 }}>{doctor.name}</div>
              <div className="mb-2 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}>{doctor.role}</div>
              <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{doctor.qualification}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
