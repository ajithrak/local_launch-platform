'use client';

import { useTheme } from '@locallaunch/theme-engine';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

/** Lighter-weight header for inner pages — the full 5-way Hero treatment is reserved for Home. */
export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  const theme = useTheme();
  const centered = theme.key === 'mothercare';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`px-6 pb-8 pt-14 md:px-10 ${centered ? 'text-center' : ''}`}
      style={theme.key === 'orthoedge' ? { borderBottom: '1px solid var(--color-border)' } : undefined}
    >
      {eyebrow && (
        <p
          className="mb-3 text-xs font-semibold uppercase"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)', letterSpacing: 2 }}
        >
          {eyebrow}
        </p>
      )}
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          letterSpacing: 'var(--tracking-display)',
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          lineHeight: 1.05,
          textTransform: theme.key === 'orthoedge' ? 'uppercase' : 'none',
        }}
      >
        {title}
      </h1>
      {description && (
        <p
          className={`mt-4 max-w-xl text-base ${centered ? 'mx-auto' : ''}`}
          style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}
        >
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
}
