import styled, { css } from 'styled-components';
import searchSvg from '@assets/search.svg';

export const Label = styled.label`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 81px;
  color: var(--theme-color);
  font-size: 0.85em;
  line-height: 34px;
  cursor: text;
  transition: top .2s, left .2s;
`;

const labelOnChange = props => !!props.value && css`
  & + ${Label} {
    top: -12px;
    left: 34px;
    color: var(--theme-color);
  }
`;

export const SearchInput = styled.input`
  height: 42px;
  border: 0;
  width: 100%;
  padding: 4px 0 4px 45px;
  background: transparent;
  color: var(--theme-color);
  
  #root &:focus {
    box-shadow: none;
  }

  ${labelOnChange}
`

export const SearchInputContainer = styled.div`
  margin: 0 0.5em;
  width: 100%;
  padding: 10px 28px;
  background: var(--theme-elements-background);
  border-radius: 4px;
  max-width: 500px;

  &::before {
    content: url(${searchSvg});
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 34px;
    width: 20px;
    height: 20px;
    pointer-events: none;
  }

  &:hover {
    background-color: var(--hover-color);
  }

  &:focus-within {
    box-shadow: 0 0 0 1px;
  }

  @media screen and (min-width: 660px) {
    margin: 0 calc(0.5em + var(--card-margin));
  }
`;

export const Field = styled.div`
  align-self: center;
  display: flex;
  margin: 40px auto;
  width: var(--layout-width);
  position: relative;

  @media screen and (min-width: 660px) {
    padding: 0 0.5em;
  }

  @media screen and (min-width: 768px) {
    width: 55%;
    margin: 60px 0;
  }
`;
