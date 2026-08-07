import type { ThemeTokens } from '../types';

export const orangeTheme: ThemeTokens = {
  key: 'orange',
  label: 'Energetic Orange',
  colors: {
    background: '#FAFAF9',
    surface: '#FFFFFF',
    surfaceAlt: '#FFEDE3',
    foreground: '#111111',
    muted: '#5B5B58',
    accent: '#FF5A1F',
    accentContrast: '#FFFFFF',
    secondary: '#1C1C1E',
    border: 'transparent',
  },
  typography: {
    display: "'Anton', 'Arial Black', sans-serif",
    body: "'Work Sans', sans-serif",
    displayTracking: '0em',
  },
  radius: { sm: '10px', md: '14px', lg: '18px' },
  shadow: { card: '0 10px 30px -12px rgba(255,90,31,0.35)', glow: null },
  card: { border: 'none', topBar: true, ornate: false, glass: false },
  motion: { durationMs: 150, ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)' },
  googleFontsHref: 'https://fonts.googleapis.com/css2?family=Anton&family=Work+Sans:wght@500;700&display=swap',
};
