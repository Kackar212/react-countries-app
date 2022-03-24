import styled from 'styled-components';

export const Wrapper = styled.div.attrs(({ justify }) => ({
  justify: justify ? 'space-between' : 'initial',
}))`
  display: flex;
  flex-wrap: wrap;
  padding: ${(props) => props.padding};
  justify-content: ${(props) => props.justify};
  max-width: calc(10% + 336px * 7);
  margin: 0 auto;
  min-height: ${(props) => props.minHeight};
`;

Wrapper.defaultProps = {
  padding: '0 5%',
};
