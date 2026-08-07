import type { ThemeTokens } from '../types';

export const darkTheme: ThemeTokens = {
  key: 'dark',
  label: 'Dark Premium',
  colors: {
    background: '#0A0A0C',
    surface: '#141416',
    surfaceAlt: '#1C1C1F',
    foreground: '#F2F2F0',
    muted: '#8B8B90',
    accent: '#4F7CFF',
    accentContrast: '#0A0F1F',
    secondary: '#C9C9CE',
    border: '#2A2A2E',
  },
  typography: {
    display: "'Bebas Neue', 'Arial Narrow', sans-serif",
    body: "'Inter', sans-serif",
    displayTracking: '0.02em',
  },
  radius: { sm: '0px', md: '0px', lg: '0px' },
  shadow: { card: 'none', glow: null },
  card: { border: '1px solid #2A2A2E', topBar: false, ornate: false, glass: false },
  motion: { durationMs: 220, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' },
  googleFontsHref:
    'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600;700&display=swap',
};
