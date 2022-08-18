import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const CardHeading = styled.h2`
  font-size: 1em;
`;

const CardLink = styled(Link)`
  padding-left: 1rem;
  text-decoration: none;
  color: var(--theme-color);
  display: block;
  font-size: 1.65em;
  font-weight: bold;
  margin: 1.25em 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  #root &:focus {
    box-shadow: none;
    ::before {
      box-shadow: 0 0 0 2px;
    }
  }
  
  @media screen and (min-width: 768px) {
    font-size: 1.15em;
  }
`

export const Card = styled.div`
  position: relative;
  width: var(--card-width);
  margin: 1em var(--card-margin);
  color: var(--theme-color);
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  max-width: 336px;
  flex-grow: 1;

  ${({ hover }) => hover && css`
    &:hover {
      background: var(--hover-color);
    }
  `}
`;

const CardTextContainer = styled.div`
  min-height: 200px;
`;

const CardText = styled.p`
  padding-left: 1em;

  span {
    text-transform: capitalize;
    font-weight: 600;
  }
`;

export {  CardText, CardLink, CardTextContainer, CardHeading }
