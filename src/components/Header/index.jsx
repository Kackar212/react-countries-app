import { HeaderHomeLink, MainHeader } from "@components/Header/style";
import { ThemeSwitcherContainer as ThemeSwitcher } from "@components/ThemeSwitcher/index.container";
import { ThemeProvider } from "@context/themeContext";
import { matchRoutes, useLocation } from 'react-router-dom';

function Header() {
  const match = matchRoutes([{ path: '/' }, { path: '/page/:page' }], useLocation());

  return (
    <MainHeader>
      <HeaderHomeLink as={match && 'h1'} to={match ?? '/'}>Where in the world?</HeaderHomeLink>
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    </MainHeader>
  );
}

export default Header;
