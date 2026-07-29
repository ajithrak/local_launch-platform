import { createContext } from 'react';
import type { ThemeTokens } from './types';

export const ThemeContext = createContext<ThemeTokens | null>(null);
