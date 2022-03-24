import styled from 'styled-components';

export const ThemeSwitcherButton = styled.button`
  display: flex;
  color: var(--theme-color);
  align-items: center;
  text-transform: capitalize;
  font-size: 0.75em;
  padding: 5px;

  & svg {
    margin-right: 5px;
    width: 22px;

    & path {
      fill: hsl(0, 0%, 100%);
      stroke: #000;
    }
  }
`;
