import styled from 'styled-components';
import { StyledButton } from '../Button/style';

export const StyledBackButton = styled(StyledButton)`
  padding: .3em 1em .3em 1em;
  box-sizing: content-box;

  svg {
    vertical-align: middle;
    margin-right: 5px;
    transform: scale(0.8);
    fill: var(--theme-color);
  }
	
	@media screen and (min-width: 1920px) {
		font-size: 1.25em;
    padding: 0.55em 2em;
		
    svg {
      transform: scale(1);
    }
	}
`;