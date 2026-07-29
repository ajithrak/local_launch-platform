import type { ThemeTokens } from '../types';

export const neonTheme: ThemeTokens = {
  key: 'neon',
  label: 'Neon Fitness',
  colors: {
    background: '#07070B',
    surface: '#0F0F16',
    surfaceAlt: '#14141D',
    foreground: '#E7FFF7',
    muted: '#8892A6',
    accent: '#39FF88',
    accentContrast: '#04140C',
    secondary: '#FF3EA5',
    border: '#22D3EE55',
  },
  typography: {
    display: "'Orbitron', 'Arial Narrow', sans-serif",
    body: "'Rajdhani', sans-serif",
    displayTracking: '0.03em',
  },
  radius: { sm: '6px', md: '8px', lg: '10px' },
  shadow: { card: '0 0 24px -8px #39FF8855', glow: '0 0 20px' },
  card: { border: '1px solid #22D3EE55', topBar: false, ornate: false },
  motion: { durationMs: 150, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' },
  googleFontsHref:
    'https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800&family=Rajdhani:wght@500;600&display=swap',
};
