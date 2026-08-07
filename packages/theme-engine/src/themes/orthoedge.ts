import type { ThemeTokens } from '../types';

export const orthoedgeTheme: ThemeTokens = {
  key: 'orthoedge',
  label: 'OrthoEdge — Orthopedic & Sports Medicine',
  colors: {
    background: '#101112',
    surface: '#1A1C1D',
    surfaceAlt: '#212325',
    foreground: '#F2F3F0',
    muted: '#9AA39C',
    accent: '#9ADE00',
    accentContrast: '#101112',
    secondary: '#E8E8E8',
    border: '#2E3130',
  },
  typography: {
    display: "'Outfit', sans-serif",
    body: "'Inter', sans-serif",
    displayTracking: '0.01em',
  },
  radius: { sm: '4px', md: '6px', lg: '8px' },
  shadow: { card: '0 1px 0 #9ADE00', glow: null },
  card: { border: '1px solid #2E3130', topBar: true, ornate: false, glass: false },
  motion: { durationMs: 180, ease: 'linear' },
  googleFontsHref:
    'https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&family=Inter:wght@400;500;600&display=swap',
};
