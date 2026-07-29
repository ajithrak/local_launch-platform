'use client';

import { Card } from '@locallaunch/ui';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import Link from 'next/link';
import type { Trainer } from '@locallaunch/config-schema';
import { useTemplateBasePath } from './TemplateBasePath';

export function Trainers({ trainers }: { trainers: Trainer[] }) {
  const basePath = useTemplateBasePath();

  return (
    <section className="px-6 pb-16 md:px-10">
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
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
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 19, color: 'var(--color-foreground)' }}>
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
