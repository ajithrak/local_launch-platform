'use client';

import { useTheme } from '@locallaunch/theme-engine';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, type CSSProperties } from 'react';
import type { BusinessInfo } from '@locallaunch/config-schema';
import { useAssetBasePath, useTemplateBasePath } from './TemplateBasePath';

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

interface NavProps {
  business: BusinessInfo;
}

/** Renders the real logo image when the client has one, else the business name in the theme's display font. */
function BrandMark({ business, style }: { business: BusinessInfo; style?: CSSProperties }) {
  const assetBasePath = useAssetBasePath();
  if (business.logo) {
    return <img src={`${assetBasePath}${business.logo}`} alt={business.name} className="h-9 w-auto object-contain" />;
  }
  return <span style={style}>{business.name}</span>;
}

export function Nav({ business }: NavProps) {
  const theme = useTheme();
  const pathname = usePathname();
  const basePath = useTemplateBasePath();
  const [open, setOpen] = useState(false);

  const withBase = (path: string) => `${basePath}${path}`;
  const isActive = (path: string) => pathname === withBase(path);

  const displayFont = { fontFamily: 'var(--font-display)', letterSpacing: 'var(--tracking-display)' };
  const bodyFont = { fontFamily: 'var(--font-body)' };

  if (theme.key === 'mednova') {
    return (
      <nav
        className="sticky top-0 z-30 flex w-full items-center justify-between px-6 py-4 backdrop-blur-xl md:px-10"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--color-background) 62%, transparent)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <Link href={basePath}>
          <BrandMark business={business} style={{ ...displayFont, fontSize: 20, fontWeight: 600, color: 'var(--color-foreground)' }} />
        </Link>
        <div className="hidden items-center gap-7 text-sm md:flex" style={{ ...bodyFont, color: 'var(--color-foreground)' }}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={withBase(link.href)} style={{ opacity: isActive(link.href) ? 1 : 0.72, fontWeight: isActive(link.href) ? 600 : 400 }}>
              {link.label}
            </Link>
          ))}
          <Link
            href={withBase('/appointment')}
            className="rounded-full px-5 py-2.5 text-sm font-semibold transition hover:brightness-110 active:scale-95"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-contrast)' }}
          >
            Book Appointment
          </Link>
        </div>
        <MobileToggle open={open} onToggle={() => setOpen((v) => !v)} className="md:hidden" />
        <MobileMenu open={open} basePath={basePath} onNavigate={() => setOpen(false)} />
      </nav>
    );
  }

  if (theme.key === 'careplus') {
    return (
      <nav className="relative flex w-full items-center justify-between px-6 py-6 md:px-10" style={{ color: 'var(--color-foreground)' }}>
        <Link href={basePath}>
          <BrandMark business={business} style={{ ...displayFont, fontSize: 19, fontWeight: 800 }} />
        </Link>
        <div
          className="hidden items-center gap-1 rounded-full p-1 md:flex"
          style={{ backgroundColor: 'var(--color-surface-alt)' }}
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={withBase(link.href)}
                className="rounded-full px-4 py-1.5 text-sm transition-colors"
                style={{
                  fontFamily: 'var(--font-body)',
                  backgroundColor: active ? 'var(--color-accent)' : 'transparent',
                  color: active ? 'var(--color-accent-contrast)' : 'var(--color-muted)',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <Link
          href={withBase('/appointment')}
          className="hidden rounded-full px-5 py-2 text-sm font-bold md:inline-block"
          style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-contrast)' }}
        >
          Book Visit
        </Link>
        <MobileToggle open={open} onToggle={() => setOpen((v) => !v)} className="md:hidden" />
        <MobileMenu open={open} basePath={basePath} onNavigate={() => setOpen(false)} />
      </nav>
    );
  }

  if (theme.key === 'orthoedge') {
    return (
      <nav
        className="relative flex w-full items-center justify-between px-6 py-5 md:px-10"
        style={{ borderBottom: '2px solid var(--color-foreground)', color: 'var(--color-foreground)' }}
      >
        <Link href={basePath}>
          <BrandMark business={business} style={{ ...displayFont, fontSize: 20, textTransform: 'uppercase' }} />
        </Link>
        <div className="hidden gap-8 text-sm md:flex" style={bodyFont}>
          {NAV_LINKS.map((link) => (
            <NavLinkUnderline key={link.href} label={link.label} href={withBase(link.href)} active={isActive(link.href)} />
          ))}
        </div>
        <Link
          href={withBase('/appointment')}
          className="hidden px-5 py-2.5 text-sm font-bold uppercase md:inline-block"
          style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-contrast)', borderRadius: 'var(--radius-sm)' }}
        >
          Book Assessment
        </Link>
        <MobileToggle open={open} onToggle={() => setOpen((v) => !v)} className="md:hidden" />
        <MobileMenu open={open} basePath={basePath} onNavigate={() => setOpen(false)} />
      </nav>
    );
  }

  if (theme.key === 'smilecraft') {
    return (
      <nav
        className="sticky top-0 z-30 flex w-full items-center justify-between px-6 py-4 backdrop-blur-md md:px-10"
        style={{ backgroundColor: 'color-mix(in srgb, var(--color-background) 88%, transparent)' }}
      >
        <Link href={basePath}>
          <BrandMark business={business} style={{ ...displayFont, fontSize: 20, fontWeight: 700, color: 'var(--color-foreground)' }} />
        </Link>
        <div className="hidden items-center gap-6 text-sm md:flex" style={{ ...bodyFont, color: 'var(--color-foreground)' }}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={withBase(link.href)} style={{ opacity: isActive(link.href) ? 1 : 0.68, fontWeight: isActive(link.href) ? 700 : 400 }}>
              {link.label}
            </Link>
          ))}
          <Link
            href={withBase('/appointment')}
            className="rounded-full px-5 py-2.5 text-sm font-semibold transition hover:brightness-110 active:scale-95"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-contrast)', boxShadow: 'var(--shadow-glow, none)' }}
          >
            Book Smile Consult
          </Link>
        </div>
        <MobileToggle open={open} onToggle={() => setOpen((v) => !v)} className="md:hidden" />
        <MobileMenu open={open} basePath={basePath} onNavigate={() => setOpen(false)} />
      </nav>
    );
  }

  // mothercare — centered brand, centered links, curved soft nav
  return (
    <nav className="relative w-full px-6 py-6 md:px-10" style={{ color: 'var(--color-foreground)' }}>
      <div className="mb-4 flex justify-center">
        <Link href={basePath}>
          <BrandMark business={business} style={{ ...displayFont, fontSize: 23, fontWeight: 800 }} />
        </Link>
      </div>
      <div className="hidden justify-center gap-8 text-sm md:flex" style={bodyFont}>
        {NAV_LINKS.map((link) => (
          <NavLinkUnderline key={link.href} label={link.label} href={withBase(link.href)} active={isActive(link.href)} />
        ))}
        <Link
          href={withBase('/appointment')}
          className="rounded-full px-5 py-1.5 font-semibold"
          style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}
        >
          Book a Consultation
        </Link>
      </div>
      <MobileToggle open={open} onToggle={() => setOpen((v) => !v)} className="absolute right-6 top-6 md:hidden" />
      <MobileMenu open={open} basePath={basePath} onNavigate={() => setOpen(false)} />
    </nav>
  );
}

function NavLinkUnderline({ label, href, active }: { label: string; href: string; active: boolean }) {
  return (
    <Link href={href} className="group relative pb-1">
      {label}
      <span
        className="absolute inset-x-0 -bottom-0.5 h-px origin-left transition-transform duration-[var(--motion-duration)] ease-[var(--motion-ease)] group-hover:scale-x-100"
        style={{ backgroundColor: 'var(--color-accent)', transform: active ? 'scaleX(1)' : 'scaleX(0)' }}
      />
    </Link>
  );
}

function MobileToggle({ open, onToggle, className }: { open: boolean; onToggle: () => void; className?: string }) {
  return (
    <button onClick={onToggle} className={className} aria-label="Toggle menu">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={open ? 'close' : 'open'}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="block"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

function MobileMenu({ open, basePath, onNavigate }: { open: boolean; basePath: string; onNavigate: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-x-0 top-full flex flex-col gap-1 overflow-hidden px-6 py-3 md:hidden"
          style={{ backgroundColor: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}
        >
          {[...NAV_LINKS, { label: 'Appointment', href: '/appointment' }].map((link) => (
            <Link key={link.href} href={`${basePath}${link.href}`} onClick={onNavigate} className="py-2 text-sm">
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
