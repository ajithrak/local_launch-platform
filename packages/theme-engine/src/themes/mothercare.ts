import type { ThemeTokens } from '../types';

export const mothercareTheme: ThemeTokens = {
  key: 'mothercare',
  label: 'MotherCare — Women’s Health & Fertility',
  colors: {
    background: '#FFF8F5',
    surface: '#FFFFFF',
    surfaceAlt: '#FCEEE7',
    foreground: '#3B2A2E',
    muted: '#8C7175',
    accent: '#E8879F',
    accentContrast: '#FFFFFF',
    secondary: '#F3B88A',
    border: '#F4D9CC',
  },
  typography: {
    display: "'Nunito', sans-serif",
    body: "'DM Sans', sans-serif",
    displayTracking: '0em',
  },
  radius: { sm: '16px', md: '28px', lg: '36px' },
  shadow: { card: '0 10px 26px -14px rgba(232,135,159,0.35)', glow: null },
  card: { border: '1px solid #F4D9CC', topBar: false, ornate: false, glass: false },
  motion: { durationMs: 460, ease: 'cubic-bezier(0.22, 1, 0.36, 1)' },
  googleFontsHref:
    'https://fonts.googleapis.com/css2?family=Nunito:wght@500;700;800&family=DM+Sans:wght@400;500;600&display=swap',
};
