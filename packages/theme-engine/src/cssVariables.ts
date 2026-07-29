import type { CSSProperties } from 'react';
import type { ThemeTokens } from './types';

/**
 * Flattens a theme into CSS custom properties. Consumers reference these via
 * Tailwind arbitrary values, e.g. `bg-[var(--color-accent)]`, so switching
 * themes is just re-assigning variable values — no component re-render logic
 * needed for styling itself.
 */
export function themeToCssVariables(theme: ThemeTokens): CSSProperties {
  return {
    '--color-background': theme.colors.background,
    '--color-surface': theme.colors.surface,
    '--color-surface-alt': theme.colors.surfaceAlt,
    '--color-foreground': theme.colors.foreground,
    '--color-muted': theme.colors.muted,
    '--color-accent': theme.colors.accent,
    '--color-accent-contrast': theme.colors.accentContrast,
    '--color-secondary': theme.colors.secondary,
    '--color-border': theme.colors.border,

    '--font-display': theme.typography.display,
    '--font-body': theme.typography.body,
    '--tracking-display': theme.typography.displayTracking,

    '--radius-sm': theme.radius.sm,
    '--radius-md': theme.radius.md,
    '--radius-lg': theme.radius.lg,

    '--shadow-card': theme.shadow.card,
    '--shadow-glow': theme.shadow.glow ?? 'none',

    '--motion-duration': `${theme.motion.durationMs}ms`,
    '--motion-ease': theme.motion.ease,
  } as CSSProperties;
}
