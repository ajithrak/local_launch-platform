'use client';

import { useTheme } from '@locallaunch/theme-engine';
import { buttonVariants } from '@locallaunch/ui';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';
import Link from 'next/link';
import type { GalleryImage, Hero as HeroConfig } from '@locallaunch/config-schema';
import { HeroCarousel } from './HeroCarousel';
import { useTemplateBasePath } from './TemplateBasePath';

interface HeroProps {
  hero: HeroConfig;
  gallery: GalleryImage[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero({ hero, gallery }: HeroProps) {
  const theme = useTheme();
  const basePath = useTemplateBasePath();
  const withBase = (href: string) => `${basePath}${href}`;

  const displayFont = { fontFamily: 'var(--font-display)', letterSpacing: 'var(--tracking-display)' };
  const bodyFont = { fontFamily: 'var(--font-body)' };

  if (theme.key === 'dark') {
    return (
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="grid grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24"
      >
        <div className="min-w-0">
          {hero.eyebrow && (
            <p className="mb-4 text-xs uppercase" style={{ ...bodyFont, color: 'var(--color-accent)', letterSpacing: 2 }}>
              {hero.eyebrow}
            </p>
          )}
          <h1 style={{ ...displayFont, fontSize: 'clamp(2.8rem, 7vw, 5.2rem)', lineHeight: 0.95 }}>{hero.headline}</h1>
          <p className="mt-6 max-w-md text-base" style={{ ...bodyFont, color: 'var(--color-muted)' }}>
            {hero.subheadline}
          </p>
          <div className="mt-8 flex gap-4">
            <Link href={withBase(hero.primaryCta.href)} className={buttonVariants({ size: 'md' })} style={{ borderRadius: 0, fontFamily: 'var(--font-body)' }}>
              {hero.primaryCta.label}
            </Link>
            {hero.secondaryCta && (
              <Link
                href={withBase(hero.secondaryCta.href)}
                className={buttonVariants({ variant: 'outline', size: 'md' })}
                style={{ borderRadius: 0, fontFamily: 'var(--font-body)' }}
              >
                {hero.secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
        <div className="relative min-w-0 h-72 md:h-96" style={{ border: '1px solid var(--color-border)' }}>
          <HeroCarousel images={gallery} className="h-full" rounded={false} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-0.5" style={{ backgroundColor: 'var(--color-accent)' }} />
        </div>
      </motion.section>
    );
  }

  if (theme.key === 'gold') {
    return (
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="mx-auto max-w-3xl px-6 py-16 text-center md:px-10 md:py-24"
      >
        <div className="mb-6 flex justify-center" style={{ color: 'var(--color-accent)' }}>
          <div className="mt-3 h-px w-10" style={{ backgroundColor: 'var(--color-accent)' }} />
          <Crown size={20} className="mx-3" />
          <div className="mt-3 h-px w-10" style={{ backgroundColor: 'var(--color-accent)' }} />
        </div>
        <h1 style={{ ...displayFont, fontSize: 'clamp(2.4rem, 6vw, 4rem)', lineHeight: 1.05 }}>{hero.headline}</h1>
        <p className="mt-6 text-lg italic" style={{ ...bodyFont, color: 'var(--color-muted)' }}>
          {hero.subheadline}
        </p>
        <Link
          href={withBase(hero.primaryCta.href)}
          className="mt-9 inline-block px-8 py-3 text-sm uppercase tracking-widest transition hover:brightness-110 active:scale-[0.98]"
          style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-background)', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-body)' }}
        >
          {hero.primaryCta.label}
        </Link>
        <HeroCarousel images={gallery} className="mt-12 h-64 w-full md:h-80" />
      </motion.section>
    );
  }

  if (theme.key === 'minimal') {
    return (
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="px-6 py-16 md:px-10 md:py-28"
      >
        <div className="max-w-4xl">
          <h1 style={{ ...displayFont, fontSize: 'clamp(2.6rem, 8vw, 5.5rem)', lineHeight: 1, fontWeight: 700 }}>
            {hero.headline}
          </h1>
          <div
            className="mt-8 flex flex-col justify-between gap-6 border-t pt-6 md:flex-row md:items-end"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <p className="max-w-sm" style={{ ...bodyFont, color: 'var(--color-muted)' }}>
              {hero.subheadline}
            </p>
            <Link
              href={withBase(hero.primaryCta.href)}
              className={buttonVariants({ size: 'md' })}
              style={{ borderRadius: 0, backgroundColor: 'var(--color-secondary)', fontFamily: 'var(--font-body)' }}
            >
              {hero.primaryCta.label} →
            </Link>
          </div>
          <HeroCarousel images={gallery} className="mt-10 h-72 w-full md:h-[26rem]" rounded={false} />
        </div>
      </motion.section>
    );
  }

  if (theme.key === 'orange') {
    return (
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="relative grid grid-cols-1 items-center gap-10 overflow-hidden px-6 pb-20 pt-14 md:grid-cols-2 md:px-10"
      >
        <div
          aria-hidden
          className="absolute -right-16 -top-16 h-72 w-72 rounded-full opacity-10"
          style={{ backgroundColor: 'var(--color-accent)' }}
        />
        <div className="min-w-0">
          {hero.eyebrow && (
            <p className="mb-3 text-sm font-bold uppercase" style={{ ...bodyFont, color: 'var(--color-accent)', letterSpacing: 1 }}>
              {hero.eyebrow}
            </p>
          )}
          <h1 style={{ ...displayFont, fontSize: 'clamp(3rem, 9vw, 6rem)', lineHeight: 0.92 }}>{hero.headline}</h1>
          <p className="mt-5 max-w-lg text-lg" style={{ ...bodyFont, color: 'var(--color-muted)' }}>
            {hero.subheadline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={withBase(hero.primaryCta.href)} className={buttonVariants({ variant: 'primary', size: 'pill' })} style={{ fontFamily: 'var(--font-body)' }}>
              {hero.primaryCta.label}
            </Link>
            {hero.secondaryCta && (
              <Link
                href={withBase(hero.secondaryCta.href)}
                className={buttonVariants({ size: 'pill' })}
                style={{ backgroundColor: 'var(--color-surface-alt)', color: 'var(--color-accent)', fontFamily: 'var(--font-body)' }}
              >
                {hero.secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
        <HeroCarousel images={gallery} className="relative min-w-0 h-64 md:h-96" />
      </motion.section>
    );
  }

  // neon
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={fadeUp}
      className="relative grid grid-cols-1 items-center gap-10 overflow-hidden px-6 py-20 md:grid-cols-2 md:px-10 md:py-28"
      style={{
        backgroundImage:
          'linear-gradient(var(--color-surface-alt) 1px, transparent 1px), linear-gradient(90deg, var(--color-surface-alt) 1px, transparent 1px)',
        backgroundSize: '34px 34px',
      }}
    >
      <div className="min-w-0 max-w-2xl">
        <p className="mb-4 text-xs uppercase" style={{ ...bodyFont, color: 'var(--color-secondary)', letterSpacing: 3 }}>
          // system online
        </p>
        <h1
          style={{
            ...displayFont,
            fontSize: 'clamp(2.4rem, 7vw, 4.4rem)',
            lineHeight: 1.05,
            textShadow: '0 0 18px color-mix(in srgb, var(--color-accent) 40%, transparent)',
          }}
        >
          {hero.headline}
        </h1>
        <p className="mt-6 text-lg" style={{ ...bodyFont, color: 'var(--color-muted)' }}>
          {hero.subheadline}
        </p>
        <Link
          href={withBase(hero.primaryCta.href)}
          className="mt-9 inline-block border px-7 py-3 font-bold transition hover:brightness-125 active:scale-[0.98]"
          style={{
            backgroundColor: 'transparent',
            color: 'var(--color-accent)',
            borderColor: 'var(--color-accent)',
            borderRadius: 'var(--radius-md)',
            boxShadow: '0 0 20px color-mix(in srgb, var(--color-accent) 35%, transparent)',
            fontFamily: 'var(--font-body)',
          }}
        >
          &gt; {hero.primaryCta.label}
        </Link>
      </div>
      <div
        className="relative min-w-0"
        style={{
          border: '1px solid var(--color-accent)',
          borderRadius: 'var(--radius-md)',
          boxShadow: '0 0 26px color-mix(in srgb, var(--color-accent) 30%, transparent)',
        }}
      >
        <HeroCarousel images={gallery} className="h-64 md:h-96" />
      </div>
    </motion.section>
  );
}
