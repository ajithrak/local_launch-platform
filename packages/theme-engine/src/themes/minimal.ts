import type { ThemeTokens } from '../types';

export const minimalTheme: ThemeTokens = {
  key: 'minimal',
  label: 'Modern Minimal',
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    surfaceAlt: '#F4F4F5',
    foreground: '#111111',
    muted: '#6B6B6B',
    accent: '#2563EB',
    accentContrast: '#FFFFFF',
    secondary: '#7C3AED',
    border: '#E5E5E5',
  },
  typography: {
    display: "'Space Grotesk', Arial, sans-serif",
    body: "'Inter', sans-serif",
    displayTracking: '-0.01em',
  },
  radius: { sm: '0px', md: '0px', lg: '0px' },
  shadow: { card: 'none', glow: null },
  card: { border: '1px solid #E5E5E5', topBar: false, ornate: false, glass: false },
  motion: { durationMs: 180, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' },
  googleFontsHref:
    'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&display=swap',
};
