import { GlobalCSS } from '@global-style/';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { createContext, useState, useEffect } from 'react';

const themes = {
  dark: { color: 'hsl(0, 0%, 100%)', background: 'hsl(207, 26%, 17%)', elements: 'hsl(209, 23%, 22%)', name: 'dark' },
  light: { color: 'hsl(200, 15%, 8%)', background: 'hsl(0, 0%, 98%)', elements: 'hsl(0, 0%, 100%)', name: 'light' },
}

const themeContext = createContext({ theme: themes.light });

function ThemeProvider({ children }) {
  let defaultTheme = themes.light;
  const { getItem } = useLocalStorage();

  const savedTheme = getItem('currentTheme')
  const [theme, setTheme] = useState(themes[savedTheme] || defaultTheme);

  useEffect(() => {
    if (window.matchMedia) {
      const themePreference = window.matchMedia('(prefers-color-scheme: dark)');
      
      if (themePreference.matches) {
        if (!savedTheme) setTheme(themes.dark);
      }

      themePreference.addEventListener('change', e => {
        if (!savedTheme) setTheme(e.matches ? themes.dark : themes.light);
      });
    }
  }, []);

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <GlobalCSS {...theme}/>
      {children}
    </themeContext.Provider>
  )
}

export { themeContext, ThemeProvider, themes }
