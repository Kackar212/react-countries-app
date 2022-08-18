import styled, { css } from 'styled-components';

const withSelectedOption = ({ selected: { children, value } }) => children && value && css`
  top: 0;
  font-size: 0.85em;
  background: var(--theme-background);
`;

export const SelectField = styled.div`
  width: var(--layout-width);
  margin: 0 auto;
  position: relative;
  border-radius: 4px;
  display: flex;
  
  & button > *, & [role="option"] > * {
    pointer-events: none;
  }

  /* & button, & [role="option"] {
    pointer-events: all;
  } */

  @media screen and (min-width: 660px) {
    padding: 0 0.5em;
  }

  @media screen and (min-width: 768px) {
    width: 40%;
    margin: 0;
    justify-content: flex-end;
    align-self: center;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  min-width: 165px;
  max-width: 250px;
  color: var(--theme-color);
  background: var(--theme-elements-background);
  border-radius: 4px;
  width: 100%;
  margin: 0 0.5em;
  z-index: 2;
  
  @media screen and (min-width: 660px) {
    margin: 0 calc(0.5em + var(--card-margin));
  }

  @media screen and (min-width: 768px) {
    margin: 0 calc(0.5em + var(--card-margin)) 0 0;
  }
`

export const SelectButton = styled.div.attrs({ 'aria-haspopup': 'listbox', 'data-type': 'custom-select', role: 'combobox', tabIndex: 0 })`
  width: 100%;
  text-align: left;
  padding: 24px calc(5% + 6px) 22px;
  color: var(--theme-color);
  font-weight: 600;
  position: relative;
  display: flex;
  align-items: center;
  line-height: 1;
  height: 61.59px;
  transition: background .3s;
  border-radius: 4px;
  cursor: pointer;
  
  & + ul > #${props => props['aria-activedescendant']} {
    box-shadow: inset 0 0 1px 1px var(--theme-color);
  }

  &:hover {
    background-color: var(--hover-color);
  }

  & svg {
    position: absolute;
    width: 16px;
    height: 16px;
    right: calc(5% + 6px);
    transition: transform .2s;
    transform: rotate(${props => props['aria-expanded'] ? 180 : 0}deg);

    & path {
      stroke: var(--theme-color);
    }
  }
`;

export const SelectLabel = styled.div`
  position: absolute;
  transform: translateY(-50%);
  top: calc(50% + 2px);
  padding: 0 6px;
  left: 5%;
  z-index: 1;
  font-weight: 600;

  line-height: 1.35;

  ${withSelectedOption}
  pointer-events: none;
`;

export const SrOnly = styled.span`
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;

export const SelectOverlay = styled.div`
  z-index: ${props => props.isOpen ? 1 : -1};
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;
