import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainHeader = styled.header`
  display: flex;
  padding: 25px 2.5%;
  justify-content: space-between;
  color: var(--theme-color);
  width: 100%;
  background: var(--theme-elements-background);
  margin: 0 auto;
  align-items: center;
`;

export const HeaderHomeLink = styled(Link)`
  font-size: 0.75em;
  padding: 0 5px;
  font-weight: bold;

  @media screen and (min-width:768px) {
    font-size: 1.15em;
  }
`;
