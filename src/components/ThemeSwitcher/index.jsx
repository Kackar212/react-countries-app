import { ReactComponent as MoonIcon } from '@assets/moon.svg';
import PropTypes from 'prop-types';
import { ThemeSwitcherButton } from './style';

function ThemeSwitcher({ changeTheme, theme }) {
  return (
    <ThemeSwitcherButton
      onClick={changeTheme}
      aria-pressed={theme.name === 'dark'}
      aria-label={'Dark theme'}
    >
      <MoonIcon />
      <span aria-hidden="true">{theme.name} mode</span>
    </ThemeSwitcherButton>
  );
}

ThemeSwitcher.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  theme: PropTypes.object,
};

export default ThemeSwitcher;
