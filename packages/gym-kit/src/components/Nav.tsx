'use client';

import { useTheme } from '@locallaunch/theme-engine';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import type { BusinessInfo } from '@locallaunch/config-schema';
import { useTemplateBasePath } from './TemplateBasePath';

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Trainers', href: '/trainers' },
  { label: 'Membership', href: '/membership' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Contact', href: '/contact' },
];

interface NavProps {
  business: BusinessInfo;
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

  if (theme.key === 'dark') {
    return (
      <nav
        className="relative flex w-full items-center justify-between px-6 py-5 md:px-10"
        style={{ borderBottom: '1px solid var(--color-border)', color: 'var(--color-foreground)' }}
      >
        <Link href={basePath} style={{ ...displayFont, fontSize: 22 }}>
          {business.name}
        </Link>
        <div className="hidden gap-8 text-sm md:flex" style={bodyFont}>
          {NAV_LINKS.map((link) => (
            <NavLinkUnderline key={link.href} label={link.label} href={withBase(link.href)} active={isActive(link.href)} />
          ))}
        </div>
        <MobileToggle open={open} onToggle={() => setOpen((v) => !v)} className="md:hidden" />
        <MobileMenu open={open} basePath={basePath} onNavigate={() => setOpen(false)} />
      </nav>
    );
  }

  if (theme.key === 'gold') {
    return (
      <nav className="relative w-full px-6 py-5 md:px-10" style={{ color: 'var(--color-foreground)' }}>
        <div className="mb-3 flex justify-center">
          <Link href={basePath} style={{ ...displayFont, fontSize: 24 }}>
            {business.name}
          </Link>
        </div>
        <div
          className="hidden justify-center gap-10 text-xs uppercase md:flex"
          style={{ ...bodyFont, letterSpacing: 1 }}
        >
          {NAV_LINKS.map((link) => (
            <NavLinkUnderline key={link.href} label={link.label} href={withBase(link.href)} active={isActive(link.href)} />
          ))}
        </div>
        <MobileToggle open={open} onToggle={() => setOpen((v) => !v)} className="absolute right-6 top-6 md:hidden" />
        <MobileMenu open={open} basePath={basePath} onNavigate={() => setOpen(false)} />
      </nav>
    );
  }

  if (theme.key === 'minimal') {
    return (
      <nav className="relative flex w-full items-center justify-between px-6 py-6 md:px-10" style={{ color: 'var(--color-foreground)' }}>
        <Link href={basePath} style={{ ...displayFont, fontSize: 18, fontWeight: 700 }}>
          {business.name}
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
                  backgroundColor: active ? 'var(--color-foreground)' : 'transparent',
                  color: active ? 'var(--color-background)' : 'var(--color-muted)',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <MobileToggle open={open} onToggle={() => setOpen((v) => !v)} className="md:hidden" />
        <MobileMenu open={open} basePath={basePath} onNavigate={() => setOpen(false)} />
      </nav>
    );
  }

  if (theme.key === 'orange') {
    return (
      <nav
        className="sticky top-0 z-30 flex w-full items-center justify-between px-6 py-4 backdrop-blur-md md:px-10"
        style={{ backgroundColor: 'color-mix(in srgb, var(--color-background) 85%, transparent)' }}
      >
        <Link href={basePath} style={{ ...displayFont, fontSize: 22, color: 'var(--color-foreground)' }}>
          {business.name}
        </Link>
        <div className="hidden items-center gap-6 text-sm md:flex" style={{ ...bodyFont, color: 'var(--color-foreground)' }}>
          {NAV_LINKS.slice(0, 5).map((link) => (
            <Link
              key={link.href}
              href={withBase(link.href)}
              style={{ opacity: isActive(link.href) ? 1 : 0.7, fontWeight: isActive(link.href) ? 700 : 400 }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={withBase('/contact')}
            className="rounded-full px-5 py-2 text-sm font-semibold transition hover:brightness-110 active:scale-95"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-contrast)' }}
          >
            Join Now
          </Link>
        </div>
        <MobileToggle open={open} onToggle={() => setOpen((v) => !v)} className="md:hidden" />
        <MobileMenu open={open} basePath={basePath} onNavigate={() => setOpen(false)} />
      </nav>
    );
  }

  // neon
  return (
    <nav
      className="sticky top-0 z-30 flex w-full items-center justify-between px-6 py-4 backdrop-blur-md md:px-10"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--color-background) 80%, transparent)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <Link href={basePath} style={{ ...displayFont, fontSize: 16, color: 'var(--color-accent)' }}>
        {business.name}
      </Link>
      <div className="hidden gap-7 text-sm md:flex" style={{ ...bodyFont, color: 'var(--color-foreground)' }}>
        {NAV_LINKS.map((link) => (
          <NavLinkUnderline key={link.href} label={link.label} href={withBase(link.href)} active={isActive(link.href)} glow />
        ))}
      </div>
      <MobileToggle open={open} onToggle={() => setOpen((v) => !v)} className="md:hidden" />
      <MobileMenu open={open} basePath={basePath} onNavigate={() => setOpen(false)} />
    </nav>
  );
}

function NavLinkUnderline({
  label,
  href,
  active,
  glow = false,
}: {
  label: string;
  href: string;
  active: boolean;
  glow?: boolean;
}) {
  return (
    <Link
      href={href}
      className="group relative pb-1"
      style={glow ? { textShadow: 'var(--glow-hover, none)' } : undefined}
      onMouseEnter={(e) => glow && (e.currentTarget.style.textShadow = '0 0 8px var(--color-accent)')}
      onMouseLeave={(e) => glow && (e.currentTarget.style.textShadow = 'none')}
    >
      {label}
      <span
        className="absolute inset-x-0 -bottom-0.5 h-px origin-left transition-transform duration-[var(--motion-duration)] ease-[var(--motion-ease)] group-hover:scale-x-100"
        style={{ backgroundColor: 'var(--color-accent)', transform: active ? 'scaleX(1)' : 'scaleX(0)' }}
      />
    </Link>
  );
}

function MobileToggle({
  open,
  onToggle,
  className,
}: {
  open: boolean;
  onToggle: () => void;
  className?: string;
}) {
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
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={`${basePath}${link.href}`} onClick={onNavigate} className="py-2 text-sm">
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
