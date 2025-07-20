import { createContext } from 'react';
import type { Themes, ThemeMods } from '../const/theme';

export const ThemeContext = createContext<{
  theme: Themes;
  setTheme: (theme: Themes) => void;
  themeMode: ThemeMods;
  setThemeMod: (themeMod: ThemeMods) => void;
} | null>(null);
