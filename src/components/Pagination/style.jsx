import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PaginationContainer = styled.div`
  width: fit-content;
  padding: 10px;
  margin: 0 auto;
`;


export const PaginationItem = styled(Link)`
  padding: 5px 10px 3px;
  margin: 3px;
  display: inline-block;
  background-color: ${({$isCurrent}) => $isCurrent ? 'var(--hover-color)' : 'transparent'};

  &:hover {
    background-color: var(--hover-color);
  }
`;
