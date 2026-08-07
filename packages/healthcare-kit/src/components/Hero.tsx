'use client';

import { useTheme } from '@locallaunch/theme-engine';
import { buttonVariants } from '@locallaunch/ui';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import type { GalleryImage, Hero as HeroConfig, Stat } from '@locallaunch/config-schema';
import { HeroCarousel } from './HeroCarousel';
import { useTemplateBasePath } from './TemplateBasePath';

interface HeroProps {
  hero: HeroConfig;
  gallery: GalleryImage[];
  stats?: Stat[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero({ hero, gallery, stats = [] }: HeroProps) {
  const theme = useTheme();
  const basePath = useTemplateBasePath();
  const withBase = (href: string) => `${basePath}${href}`;

  const displayFont = { fontFamily: 'var(--font-display)', letterSpacing: 'var(--tracking-display)' };
  const bodyFont = { fontFamily: 'var(--font-body)' };

  if (theme.key === 'mednova') {
    return (
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="relative overflow-hidden px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24"
        style={{ backgroundImage: 'linear-gradient(160deg, #0B3B53 0%, #12849C 65%, #17A2B8 100%)' }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="min-w-0">
            {hero.eyebrow && (
              <p className="mb-4 flex items-center gap-2 text-xs uppercase" style={{ ...bodyFont, color: '#BEEFF5', letterSpacing: 2 }}>
                <ShieldCheck size={14} /> {hero.eyebrow}
              </p>
            )}
            <h1 style={{ ...displayFont, fontSize: 'clamp(2.6rem, 6vw, 4.4rem)', lineHeight: 1.05, color: '#FFFFFF', fontWeight: 600 }}>
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-md text-base" style={{ ...bodyFont, color: 'rgba(255,255,255,0.82)' }}>
              {hero.subheadline}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href={withBase(hero.primaryCta.href)}
                className="rounded-full px-7 py-3.5 text-sm font-semibold backdrop-blur-md transition hover:brightness-110 active:scale-[0.98]"
                style={{ ...bodyFont, backgroundColor: 'rgba(255,255,255,0.95)', color: '#0B3B53' }}
              >
                {hero.primaryCta.label}
              </Link>
              {hero.secondaryCta && (
                <Link
                  href={withBase(hero.secondaryCta.href)}
                  className="rounded-full border px-7 py-3.5 text-sm font-semibold backdrop-blur-md transition hover:bg-white/10"
                  style={{ ...bodyFont, borderColor: 'rgba(255,255,255,0.4)', color: '#FFFFFF' }}
                >
                  {hero.secondaryCta.label}
                </Link>
              )}
            </div>
          </div>
          <div
            className="relative min-w-0 h-72 rounded-[22px] p-2 backdrop-blur-xl md:h-96"
            style={{ backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.35)' }}
          >
            <HeroCarousel images={gallery} className="h-full" />
          </div>
        </div>
      </motion.section>
    );
  }

  if (theme.key === 'careplus') {
    return (
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="relative grid grid-cols-1 items-center gap-10 overflow-hidden px-6 pb-16 pt-12 md:grid-cols-2 md:px-10 md:pt-16"
      >
        <div
          aria-hidden
          className="absolute -left-20 -top-20 h-64 w-64 rounded-full opacity-40"
          style={{ backgroundColor: 'var(--color-surface-alt)' }}
        />
        <div className="relative min-w-0">
          {hero.eyebrow && (
            <p className="mb-3 text-sm font-bold uppercase" style={{ ...bodyFont, color: 'var(--color-secondary)', letterSpacing: 1 }}>
              {hero.eyebrow}
            </p>
          )}
          <h1 style={{ ...displayFont, fontSize: 'clamp(2.6rem, 6.5vw, 4.4rem)', lineHeight: 1.05, fontWeight: 800 }}>
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-md text-lg" style={{ ...bodyFont, color: 'var(--color-muted)' }}>
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

  if (theme.key === 'orthoedge') {
    return (
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="grid grid-cols-1 items-stretch gap-0 md:grid-cols-2"
      >
        <div className="flex min-w-0 flex-col justify-center px-6 py-16 md:px-10 md:py-24">
          {hero.eyebrow && (
            <p className="mb-4 text-xs font-bold uppercase" style={{ ...bodyFont, color: 'var(--color-secondary)', letterSpacing: 2 }}>
              {hero.eyebrow}
            </p>
          )}
          <h1 style={{ ...displayFont, fontSize: 'clamp(2.6rem, 6vw, 4.6rem)', lineHeight: 0.98, textTransform: 'uppercase' }}>
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-md text-base" style={{ ...bodyFont, color: 'var(--color-muted)' }}>
            {hero.subheadline}
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              href={withBase(hero.primaryCta.href)}
              className="px-7 py-3.5 text-sm font-bold uppercase transition hover:brightness-95 active:scale-[0.98]"
              style={{ fontFamily: 'var(--font-body)', backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-contrast)', borderRadius: 'var(--radius-sm)' }}
            >
              {hero.primaryCta.label}
            </Link>
            {hero.secondaryCta && (
              <Link
                href={withBase(hero.secondaryCta.href)}
                className="border-2 px-7 py-3.5 text-sm font-bold uppercase"
                style={{ fontFamily: 'var(--font-body)', borderColor: 'var(--color-foreground)', color: 'var(--color-foreground)', borderRadius: 'var(--radius-sm)' }}
              >
                {hero.secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
        <div className="relative min-w-0" style={{ borderLeft: '2px solid var(--color-foreground)' }}>
          <HeroCarousel images={gallery} className="h-72 md:h-full" rounded={false} />
          {stats[0] && (
            <div
              className="absolute bottom-0 left-0 px-6 py-4"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-contrast)' }}
            >
              <div style={{ ...displayFont, fontSize: 30 }}>{stats[0].value}</div>
              <div className="text-xs uppercase" style={{ ...bodyFont, letterSpacing: 1 }}>{stats[0].label}</div>
            </div>
          )}
        </div>
      </motion.section>
    );
  }

  if (theme.key === 'smilecraft') {
    return (
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="relative px-6 pb-24 pt-14 md:px-10 md:pb-32 md:pt-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          {hero.eyebrow && (
            <p className="mb-4 text-xs uppercase" style={{ ...bodyFont, color: 'var(--color-accent)', letterSpacing: 2 }}>
              {hero.eyebrow}
            </p>
          )}
          <h1 style={{ ...displayFont, fontSize: 'clamp(2.6rem, 6vw, 4.2rem)', lineHeight: 1.05 }}>{hero.headline}</h1>
          <p className="mx-auto mt-6 max-w-lg text-base" style={{ ...bodyFont, color: 'var(--color-muted)' }}>
            {hero.subheadline}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={withBase(hero.primaryCta.href)} className={buttonVariants({ size: 'pill' })} style={{ fontFamily: 'var(--font-body)', boxShadow: 'var(--shadow-glow, none)' }}>
              {hero.primaryCta.label}
            </Link>
            {hero.secondaryCta && (
              <Link href={withBase(hero.secondaryCta.href)} className={buttonVariants({ variant: 'outline', size: 'pill' })} style={{ fontFamily: 'var(--font-body)' }}>
                {hero.secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
        <div className="relative mx-auto mt-14 max-w-4xl">
          <HeroCarousel images={gallery} className="h-72 md:h-[26rem]" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-24 left-1/2 hidden -translate-x-1/2 items-center gap-4 rounded-[var(--radius-lg)] px-6 py-4 sm:flex"
            style={{ backgroundColor: 'var(--color-surface)', boxShadow: 'var(--shadow-card)', border: '1px solid var(--color-border)' }}
          >
            <div className="text-left">
              <div style={{ ...displayFont, fontSize: 15, fontWeight: 700 }}>Next available slot</div>
              <div className="text-xs" style={{ ...bodyFont, color: 'var(--color-muted)' }}>Today, 4:30 PM</div>
            </div>
            <Link
              href={withBase('/appointment')}
              className="rounded-full px-4 py-2 text-xs font-semibold"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-contrast)' }}
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </motion.section>
    );
  }

  // mothercare — warm, centered, curved
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={fadeUp}
      className="relative overflow-hidden px-6 pb-24 pt-14 md:px-10 md:pt-20"
      style={{ borderBottomLeftRadius: '48px', borderBottomRightRadius: '48px', backgroundColor: 'var(--color-surface-alt)' }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="min-w-0 text-center md:text-left">
          {hero.eyebrow && (
            <p className="mb-4 text-xs uppercase" style={{ ...bodyFont, color: 'var(--color-accent)', letterSpacing: 2 }}>
              {hero.eyebrow}
            </p>
          )}
          <h1 style={{ ...displayFont, fontSize: 'clamp(2.4rem, 5.5vw, 3.8rem)', lineHeight: 1.15, fontWeight: 800 }}>
            {hero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base md:mx-0" style={{ ...bodyFont, color: 'var(--color-muted)' }}>
            {hero.subheadline}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <Link
              href={withBase(hero.primaryCta.href)}
              className="rounded-full px-7 py-3.5 text-sm font-semibold transition hover:brightness-105 active:scale-[0.98]"
              style={{ fontFamily: 'var(--font-body)', backgroundColor: 'var(--color-accent)', color: 'white' }}
            >
              {hero.primaryCta.label}
            </Link>
            {hero.secondaryCta && (
              <Link
                href={withBase(hero.secondaryCta.href)}
                className="rounded-full px-7 py-3.5 text-sm font-semibold"
                style={{ fontFamily: 'var(--font-body)', backgroundColor: 'var(--color-surface)', color: 'var(--color-foreground)', border: '1px solid var(--color-border)' }}
              >
                {hero.secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
        <HeroCarousel images={gallery} className="relative min-w-0 h-72 md:h-[26rem]" />
      </div>
    </motion.section>
  );
}
