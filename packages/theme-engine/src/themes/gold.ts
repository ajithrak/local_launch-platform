import type { ThemeTokens } from '../types';

export const goldTheme: ThemeTokens = {
  key: 'gold',
  label: 'Luxury Gold',
  colors: {
    background: '#F8F3E9',
    surface: '#FFFFFF',
    surfaceAlt: '#F1E8D2',
    foreground: '#1A1611',
    muted: '#6B6152',
    accent: '#AD8A2E',
    accentContrast: '#FFFFFF',
    secondary: '#1F3D2B',
    border: '#D8C79E',
  },
  typography: {
    display: "'Playfair Display', Georgia, serif",
    body: "'Lato', Georgia, serif",
    displayTracking: '0.01em',
  },
  radius: { sm: '2px', md: '2px', lg: '4px' },
  shadow: { card: '0 1px 0 #AD8A2E', glow: null },
  card: { border: '1px solid #D8C79E', topBar: false, ornate: true, glass: false },
  motion: { durationMs: 320, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' },
  googleFontsHref:
    'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lato:ital,wght@0,400;0,700;1,400&display=swap',
};
