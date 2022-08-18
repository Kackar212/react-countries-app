import { ReactComponent as MoonIcon } from '@assets/moon.svg';
import { ThemeSwitcherButton } from './style';

function ThemeSwitcher({ changeTheme, nextTheme, theme }) {
  return (
    <ThemeSwitcherButton
      onClick={changeTheme}
      aria-pressed={theme.name === 'dark'}
      aria-label={`Dark theme`}
    >
      <MoonIcon />
      <span aria-hidden="true">{theme.name} mode</span>
    </ThemeSwitcherButton>
  );
}

export default ThemeSwitcher;
