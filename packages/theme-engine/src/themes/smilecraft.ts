import type { ThemeTokens } from '../types';

export const smilecraftTheme: ThemeTokens = {
  key: 'smilecraft',
  label: 'SmileCraft — Dental & Orthodontics',
  colors: {
    background: '#FFFFFF',
    surface: '#F6F1E4',
    surfaceAlt: '#EFEADA',
    foreground: '#2B2620',
    muted: '#7A7062',
    accent: '#3F9142',
    accentContrast: '#FFFFFF',
    secondary: '#9BE39D',
    border: '#E6DCC6',
  },
  typography: {
    display: "'Plus Jakarta Sans', sans-serif",
    body: "'Inter', sans-serif",
    displayTracking: '-0.01em',
  },
  radius: { sm: '14px', md: '22px', lg: '28px' },
  shadow: { card: '0 16px 32px -14px rgba(63,145,66,0.24)', glow: '0 0 30px -8px rgba(155,227,157,0.5)' },
  card: { border: '1px solid #E6DCC6', topBar: false, ornate: false, glass: false },
  motion: { durationMs: 300, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' },
  googleFontsHref:
    'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&family=Inter:wght@400;500;600&display=swap',
};
