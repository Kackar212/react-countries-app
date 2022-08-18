import styled from 'styled-components';

export const StyledButton = styled.button`
  background: var(--theme-elements-background);
  color: var(--theme-color);
  box-shadow: rgb(0 0 0 / 20%) 2px 2px 6px 2px;
  border-radius: 2px;
  font-size: 0.85em;
	padding: 0.75em 1.5em;

  &:hover {
    background-color: var(--hover-color);
  }
`;
