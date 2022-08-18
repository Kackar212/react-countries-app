import  styled from 'styled-components';

export const ErrorContainer = styled.div`
  margin: 1em 0.5em;

  @media screen and (min-width: 660px) {
    & {
      margin: 1em calc(0.5em + var(--card-margin));
    }
  }
`;
