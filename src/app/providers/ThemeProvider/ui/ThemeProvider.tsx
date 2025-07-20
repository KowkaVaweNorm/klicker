import { useState, useEffect, startTransition, useLayoutEffect } from 'react';
import { matchBrowserPrefers } from 'shared/lib/utils';
import type { ThemeMods, Themes } from '../model/const/theme';
import { ThemeContext } from '../model/context/themeContext';

const StorageKey = 'color-theme';

const getTheme = (): { themeMode: ThemeMods; theme: Themes } => {
  let themeMode = localStorage.getItem(StorageKey) as ThemeMods;
  let theme: Themes;

  if (!themeMode) {
    localStorage.setItem(StorageKey, 'device');
    themeMode = 'device';
  }
  if (themeMode === 'device') {
    theme = matchBrowserPrefers('dark').matches ? 'dark' : 'light';
  } else {
    theme = themeMode === 'dark' ? 'dark' : 'light';
  }
  return { themeMode, theme };
};

const Theme = (props: { children: React.ReactNode }): JSX.Element => {
  const { themeMode: initialThemeMode, theme: initialTheme } = getTheme();
  const [theme, setTheme] = useState<Themes>(initialTheme);
  const [themeMode, setThemeMod] = useState<ThemeMods>(initialThemeMode);

  let darkThemeMatch: MediaQueryList;

  const matchBrowserTheme = (): void => {
    startTransition(() => {
      if (matchBrowserPrefers('dark').matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    });
  };

  useLayoutEffect(() => {
    if (themeMode !== 'device') {
      startTransition(() => {
        setTheme(themeMode);
      });
      return;
    }
    setTimeout(matchBrowserTheme, 1);

    if (!darkThemeMatch) {
      darkThemeMatch = matchBrowserPrefers('dark');
    }
    darkThemeMatch.addEventListener('change', matchBrowserTheme);

    return (): void => {
      darkThemeMatch.removeEventListener('change', matchBrowserTheme);
    };
  }, [themeMode]);

  useEffect(() => {
    localStorage.setItem(StorageKey, themeMode);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme, themeMode]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        themeMode,
        setThemeMod,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default Theme;
