import styled, { css } from 'styled-components';

export const ListItem = styled.li.attrs({ role: 'option' })`
  cursor: pointer;
  padding: 5%;
  font-weight: 600;

  &:hover {
    background-color: var(--hover-color);
  }

  ${(props) => props['aria-selected'] && css`background-color: var(--selected-option);`}
`

export const Option = styled.span`
  display: block;
`;
