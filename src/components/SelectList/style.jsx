import styled, { css } from 'styled-components';

const transition = ({ isOpen }) => css`
  transition: transform .2s, opacity .2s, visibility 0s ${!isOpen && '.2s'};
`;

const onOpen = css`
  transform: translateY(0px);
  visibility: visible;
  opacity: 1;
`

export const List = styled.ul.attrs({ tabindex: "-1", className: 'select-list' })`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 68px;
  left: -1px;
  background: var(--theme-elements-background);
  width: calc(100% + 2px);
  transform: translateY(20px);
  z-index: 6;
  opacity: 0;
  visibility: hidden;
  border-radius: 4px;
  ${transition}

  ${({ isOpen }) => isOpen && onOpen}
`;
