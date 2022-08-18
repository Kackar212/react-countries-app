import { themeContext, themes } from "@context/themeContext";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { useContext, useEffect } from 'react';
import ThemeSwitcher from '.';

export function ThemeSwitcherContainer() {
  const { theme, setTheme } = useContext(themeContext);
  const { setItem } = useLocalStorage();

  function getNextTheme() {
    return theme.name === 'light' ? themes.dark : themes.light;
  }

  function changeTheme() {
    const nextTheme = getNextTheme();

    setTheme(nextTheme);
    setItem('currentTheme', nextTheme.name);
  }

  return <ThemeSwitcher changeTheme={changeTheme} nextTheme={getNextTheme()} theme={theme}/>
}
