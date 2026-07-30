'use client';

import { useTheme } from '@locallaunch/theme-engine';
import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../cn';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /**
   * 'default' renders the theme's full card recipe (top accent bar, ornate
   * corners). 'plain' keeps the shared border/shadow/radius but drops those
   * decorations — for sections (pricing, profiles, list rows) that need a
   * quieter container so the page doesn't read as one repeated card shape.
   */
  variant?: 'default' | 'plain';
}

/**
 * Renders using the active theme's card "recipe" — border, top accent bar,
 * ornate corners, and hover glow are theme decisions, not per-usage props.
 * Box-shadow lives in className (not inline style) so the hover variant can
 * actually take effect; inline styles would out-specificity any :hover rule.
 */
export function Card({ className, children, style, variant = 'default', ...props }: CardProps) {
  const theme = useTheme();
  const hasGlow = Boolean(theme.shadow.glow);

  return (
    <div
      className={cn(
        'relative overflow-hidden p-6 transition-all duration-[var(--motion-duration)] ease-[var(--motion-ease)]',
        'shadow-[var(--shadow-card)] hover:-translate-y-1',
        hasGlow ? 'hover:shadow-[var(--shadow-glow)]' : 'hover:shadow-xl',
        className
      )}
      style={{
        backgroundColor: 'var(--color-surface)',
        border: theme.card.border,
        borderRadius: 'var(--radius-lg)',
        ...style,
      }}
      {...props}
    >
      {variant === 'default' && theme.card.topBar && (
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-2"
          style={{
            backgroundImage: 'linear-gradient(90deg, var(--color-accent), color-mix(in srgb, var(--color-accent) 60%, white))',
          }}
        />
      )}
      {variant === 'default' && theme.card.ornate && (
        <>
          <span
            aria-hidden
            className="absolute left-2.5 top-2.5 h-5 w-5 border-l-2 border-t-2"
            style={{ borderColor: 'var(--color-accent)' }}
          />
          <span
            aria-hidden
            className="absolute bottom-2.5 right-2.5 h-5 w-5 border-b-2 border-r-2"
            style={{ borderColor: 'var(--color-accent)' }}
          />
        </>
      )}
      {children}
    </div>
  );
}
