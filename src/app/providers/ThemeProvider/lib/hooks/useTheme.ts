import { useContext } from 'react';
import type { Themes, ThemeMods } from '../../model/const/theme';
import { ThemeContext } from '../../model/context/themeContext';

export const useTheme = (): {
  theme: Themes;
  setTheme: (theme: Themes) => void;
  themeMode: ThemeMods;
  setThemeMod: (themeMod: ThemeMods) => void;
} => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'You can use "useTheme" hook only within a <ThemeProvider> component.',
    );
  }

  return context;
};
