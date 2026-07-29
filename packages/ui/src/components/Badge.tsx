import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { cn } from '../cn';

const badgeVariants = cva('inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide', {
  variants: {
    variant: {
      accent: 'bg-[var(--color-accent)] text-[var(--color-accent-contrast)]',
      muted: 'bg-[var(--color-surface-alt)] text-[var(--color-muted)]',
      outline: 'border border-[var(--color-border)] text-[var(--color-foreground)]',
    },
  },
  defaultVariants: { variant: 'accent' },
});

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, style, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant }), className)}
      style={{ fontFamily: 'var(--font-body)', ...style }}
      {...props}
    />
  );
}
