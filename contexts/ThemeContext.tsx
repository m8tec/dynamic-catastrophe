"use client";

import { createContext, useContext } from 'react';
import { THEMES, ThemeColors } from '@/constants/theme';

const ThemeContext = createContext<ThemeColors>(THEMES.default);

export function ThemeProvider({ theme, children }: { theme: keyof typeof THEMES, children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={THEMES[theme] || THEMES.default}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}