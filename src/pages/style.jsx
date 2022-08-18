import styled from 'styled-components';

export const Wrapper = styled.div.attrs(({ justify, padding, maxWidth, noWrap }) => ({
  justify: justify ? 'space-between' : 'initial',
  padding: padding || '0 5%',
}))`
  display: flex;
  flex-wrap: wrap;
  padding: ${props => props.padding};
  justify-content: ${props => props.justify};
  max-width: calc(10% + 336px * 7);
  margin: 0 auto;
  min-height: ${props => props.minHeight};
`;

Wrapper.defaultProps = {
  minHeight: 0,
}
