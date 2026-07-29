import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-semibold transition duration-[var(--motion-duration)] ease-[var(--motion-ease)] disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'bg-[var(--color-accent)] text-[var(--color-accent-contrast)] hover:brightness-110 active:scale-[0.98]',
        outline:
          'border border-[var(--color-border)] text-[var(--color-foreground)] hover:bg-[var(--color-surface-alt)]',
        ghost: 'text-[var(--color-foreground)] hover:bg-[var(--color-surface-alt)]',
      },
      size: {
        md: 'px-6 py-3 text-sm rounded-[var(--radius-md)]',
        sm: 'px-4 py-2 text-xs rounded-[var(--radius-sm)]',
        pill: 'px-6 py-3 text-sm rounded-full',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
);
