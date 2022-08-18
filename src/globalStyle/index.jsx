import { StyledButton } from '@components/Button/style';
import { Link } from 'react-router-dom';
import styled, {
  createGlobalStyle,
  css
} from 'styled-components';
import { normalize } from './normalize';

const variables = ({ color, background, elements }) => css`
  --theme-color: ${color};
  --theme-background: ${background};
  --theme-elements-background: ${elements};
  --layout-width: 100%;
  --card-width: 100%;
  --card-margin: auto;
  --hover-color: #9baab93d;
  --selected-option: #6f7e8c57;
  --focus-outline-color: #000;
`

export const StyledLink = styled(StyledButton).attrs({ as: Link })``;

export const GlobalCSS = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    ${variables}
    scroll-behavior: smooth;
  }

  #root :focus {
    box-shadow: 0 0 0 1px;
    outline: 0;
  }

  body {
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;
    display: flex;
    background-color: var(--theme-background);
    color: var(--theme-color);
  }

  #root {
    width: 100%;
  }

  button {
    border: 0;
    background: transparent;
    padding: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: var(--theme-color);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ${normalize}
  
  @media screen and (min-width: 660px) {
    :root {
      --card-width: calc(100% / 2);
      --card-margin: 0;
    }
  }

  @media screen and (min-width: 768px) {
    :root {
      --card-width: calc(100% / 3);
    }
  }

  @media screen and (min-width: 1024px) {
    :root {
      --card-width: calc(100% / 4);
    }
  }

  @media screen and (min-width: 1440px) {
    :root {
      --card-width: calc(100% / 5);
    }
  }

  @media screen and (min-width: 1920px) {
    :root {
      --card-width: calc(100% / 6);
    }
  }

  @media screen and (min-width: 2048px) {
    :root {
      --card-width: calc(100% / 7);
    }
  }
`;
