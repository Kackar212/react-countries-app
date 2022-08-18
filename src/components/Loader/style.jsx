import styled, { keyframes } from 'styled-components';

const rotate = ({scale = 1}) => keyframes`
  from {
    transform: rotate(0deg) scale(${scale});
  }
  to {
    transform: rotate(360deg) scale(${scale});
  }
`;

export const SpinnerContainer = styled.span`
  top: 0;
  left: 0;
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .35);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.span`
  background: transparent;
  border-top: 5px solid transparent;
  border-bottom: 5px solid #fff;
  border-right: 5px solid transparent;
  border-left: 5px solid #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: block;
  animation: ${rotate} 0.5s linear infinite;
`;

SpinnerContainer.defaultProps = {
  scale: 1,
  minHeight: 0,
};
