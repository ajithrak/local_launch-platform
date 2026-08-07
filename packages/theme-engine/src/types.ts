/**
 * A theme is a complete, self-contained design system: colors, type, shape,
 * and the small "recipe" choices (card chrome, animation feel, icon weight)
 * that make two themes actually look like different products rather than
 * a palette swap of the same layout.
 */
export interface ThemeTokens {
  key: string;
  label: string;

  colors: {
    background: string;
    surface: string;
    surfaceAlt: string;
    foreground: string;
    muted: string;
    accent: string;
    accentContrast: string;
    secondary: string;
    border: string;
  };

  typography: {
    display: string;
    body: string;
    displayTracking: string;
  };

  /** Small/medium/large radius scale. Full/pill shapes use Tailwind's built-in `rounded-full`. */
  radius: {
    sm: string;
    md: string;
    lg: string;
  };

  shadow: {
    card: string;
    glow: string | null;
  };

  card: {
    border: string;
    /** Renders a colored bar across the top edge of cards (energetic themes). */
    topBar: boolean;
    /** Renders corner brackets on cards (luxury/editorial themes). */
    ornate: boolean;
    /** Translucent, backdrop-blurred surface instead of a solid fill (glassmorphic themes). */
    glass: boolean;
  };

  motion: {
    /** Base transition duration in ms for hovers, tab switches, etc. */
    durationMs: number;
    ease: string;
  };

  googleFontsHref: string;
}

export type ThemeKey =
  | 'dark'
  | 'gold'
  | 'minimal'
  | 'orange'
  | 'neon'
  | 'mednova'
  | 'careplus'
  | 'orthoedge'
  | 'smilecraft'
  | 'mothercare';
