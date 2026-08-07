import type { ThemeTokens } from '../types';

export const mednovaTheme: ThemeTokens = {
  key: 'mednova',
  label: 'MedNova — Premium Hospital',
  colors: {
    background: '#F4FAFB',
    surface: '#FFFFFF',
    surfaceAlt: '#E8F6F8',
    foreground: '#0B2230',
    muted: '#4C6672',
    accent: '#0F6E8C',
    accentContrast: '#FFFFFF',
    secondary: '#17A2B8',
    border: '#CFE7EC',
  },
  typography: {
    display: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
    displayTracking: '-0.005em',
  },
  radius: { sm: '10px', md: '16px', lg: '22px' },
  shadow: { card: '0 12px 30px -14px rgba(15,110,140,0.32)', glow: '0 0 32px -8px rgba(23,162,184,0.45)' },
  card: { border: '1px solid rgba(255,255,255,0.55)', topBar: false, ornate: false, glass: true },
  motion: { durationMs: 380, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' },
  googleFontsHref:
    'https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&display=swap',
};
