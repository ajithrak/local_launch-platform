'use client';

import { Card } from '@locallaunch/ui';
import { useTheme } from '@locallaunch/theme-engine';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import Link from 'next/link';
import type { Trainer } from '@locallaunch/config-schema';
import { useTemplateBasePath } from './TemplateBasePath';

export function Trainers({ trainers }: { trainers: Trainer[] }) {
  const theme = useTheme();
  const basePath = useTemplateBasePath();

  if (theme.key === 'gold') {
    return (
      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link href={`${basePath}/trainers/${trainer.slug}`}>
                <Card className="h-full transition hover:-translate-y-1">
                  <div
                    className="mb-4 flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 15%, transparent)' }}
                  >
                    <Users size={24} style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <div className="font-semibold" style={{ fontFamily: 'var(--font-body)', fontSize: 19, color: 'var(--color-foreground)' }}>
                    {trainer.name}
                  </div>
                  <div className="mb-2 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}>
                    {trainer.role}
                  </div>
                  <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                    {trainer.bio}
                  </p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  if (theme.key === 'minimal') {
    return (
      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto max-w-3xl divide-y divide-[var(--color-border)]">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Link href={`${basePath}/trainers/${trainer.slug}`} className="block py-6 first:pt-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-semibold" style={{ fontFamily: 'var(--font-body)', fontSize: 17 }}>
                    {trainer.name}
                  </span>
                  <span className="text-xs uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', letterSpacing: 1.5 }}>
                    {trainer.role}
                  </span>
                </div>
                <p className="mt-2 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                  {trainer.bio}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  if (theme.key === 'dark') {
    return (
      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link href={`${basePath}/trainers/${trainer.slug}`}>
                <div
                  className="flex h-full overflow-hidden transition hover:-translate-y-1"
                  style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
                >
                  <div
                    className="flex w-20 flex-shrink-0 items-center justify-center sm:w-24"
                    style={{ backgroundColor: 'var(--color-surface-alt)' }}
                  >
                    <Users size={30} style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <div className="flex-1 p-5">
                    <div className="font-semibold" style={{ fontFamily: 'var(--font-body)', fontSize: 17 }}>
                      {trainer.name}
                    </div>
                    <div className="mb-2 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}>
                      {trainer.role}
                    </div>
                    <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                      {trainer.bio}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  if (theme.key === 'neon') {
    return (
      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link href={`${basePath}/trainers/${trainer.slug}`}>
                <div
                  className="h-full p-5 transition hover:-translate-y-1"
                  style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md"
                      style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 15%, transparent)' }}
                    >
                      <Users size={20} style={{ color: 'var(--color-accent)' }} />
                    </div>
                    <div>
                      <div className="font-semibold" style={{ fontFamily: 'var(--font-body)', fontSize: 16 }}>
                        {trainer.name}
                      </div>
                      <span
                        className="inline-block rounded px-1.5 py-0.5 text-[10px] uppercase"
                        style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-contrast)', letterSpacing: 1 }}
                      >
                        {trainer.role}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                    {trainer.bio}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  // orange (Titan) — centered profile card with ringed avatar
  return (
    <section className="px-6 pb-16 md:px-10">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {trainers.map((trainer, index) => (
          <motion.div
            key={trainer.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <Link href={`${basePath}/trainers/${trainer.slug}`}>
              <Card variant="plain" className="h-full text-center transition hover:-translate-y-1">
                <div
                  className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2"
                  style={{
                    borderColor: 'var(--color-accent)',
                    backgroundColor: 'color-mix(in srgb, var(--color-accent) 12%, transparent)',
                  }}
                >
                  <Users size={28} style={{ color: 'var(--color-accent)' }} />
                </div>
                <div className="font-semibold" style={{ fontFamily: 'var(--font-body)', fontSize: 19, color: 'var(--color-foreground)' }}>
                  {trainer.name}
                </div>
                <div className="mb-2 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}>
                  {trainer.role}
                </div>
                <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                  {trainer.bio}
                </p>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
