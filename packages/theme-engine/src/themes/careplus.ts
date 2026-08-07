import type { ThemeTokens } from '../types';

export const careplusTheme: ThemeTokens = {
  key: 'careplus',
  label: 'CarePlus — Family Clinic',
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    surfaceAlt: '#F5F0FD',
    foreground: '#1F1730',
    muted: '#6B637A',
    accent: '#710EE9',
    accentContrast: '#FFFFFF',
    secondary: '#F2B84B',
    border: '#E4D9FA',
  },
  typography: {
    display: "'DM Sans', sans-serif",
    body: "'Inter', sans-serif",
    displayTracking: '-0.01em',
  },
  radius: { sm: '12px', md: '20px', lg: '26px' },
  shadow: { card: '0 6px 16px -8px rgba(113,14,233,0.22)', glow: null },
  card: { border: '1px solid #E4D9FA', topBar: false, ornate: false, glass: false },
  motion: { durationMs: 220, ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)' },
  googleFontsHref:
    'https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700;800&family=Inter:wght@400;500;600&display=swap',
};
