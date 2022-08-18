import styled, { css } from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Image = styled(LazyLoadImage)`
  width: 100%;
  height: 100%;
  min-height: 150px;

	${({ fit }) => fit && css`
    object-fit: cover;
	`}
`

export const ImageContainer = styled.div`
  height: 100%;
  position: relative;
`;

export const ImageLoader = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--theme-background);
  z-index: 1;
`;
