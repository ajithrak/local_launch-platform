'use client';

import { THEME_KEYS, THEMES, type ThemeKey } from '@locallaunch/theme-engine';
import { motion } from 'framer-motion';

interface ThemeSwitcherProps {
  active: ThemeKey;
  onChange: (key: ThemeKey) => void;
}

/**
 * Sales/preview affordance so a prospective client can see the full range of
 * looks live. Not meant to ship on the real per-client production site —
 * gate behind an env flag before launch (see page.tsx).
 */
export function ThemeSwitcher({ active, onChange }: ThemeSwitcherProps) {
  return (
    <div className="sticky top-0 z-50 flex flex-wrap items-center justify-center gap-2 bg-neutral-900 px-4 py-3">
      <span className="mr-2 hidden text-xs text-neutral-400 sm:inline">Preview theme:</span>
      {THEME_KEYS.map((key) => {
        const isActive = key === active;
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className="relative rounded-full px-3 py-1.5 text-xs font-medium text-neutral-300 transition-colors"
          >
            {isActive && (
              <motion.span
                layoutId="theme-switcher-pill"
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: THEMES[key].colors.accent }}
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative z-10" style={{ color: isActive ? THEMES[key].colors.accentContrast : undefined }}>
              {THEMES[key].label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
