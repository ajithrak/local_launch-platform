'use client';

import { useTheme } from '@locallaunch/theme-engine';
import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../cn';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/**
 * Renders using the active theme's card "recipe" — border, top accent bar,
 * and ornate corner brackets are theme decisions, not per-usage props.
 */
export function Card({ className, children, style, ...props }: CardProps) {
  const theme = useTheme();

  return (
    <div
      className={cn('relative overflow-hidden p-6', className)}
      style={{
        backgroundColor: 'var(--color-surface)',
        border: theme.card.border,
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-card)',
        ...style,
      }}
      {...props}
    >
      {theme.card.topBar && (
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-1.5"
          style={{ backgroundColor: 'var(--color-accent)' }}
        />
      )}
      {theme.card.ornate && (
        <>
          <span
            aria-hidden
            className="absolute left-2 top-2 h-4 w-4 border-l-2 border-t-2"
            style={{ borderColor: 'var(--color-accent)' }}
          />
          <span
            aria-hidden
            className="absolute bottom-2 right-2 h-4 w-4 border-b-2 border-r-2"
            style={{ borderColor: 'var(--color-accent)' }}
          />
        </>
      )}
      {children}
    </div>
  );
}
