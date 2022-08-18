import { Spinner, SpinnerContainer } from './style';

function Loader({ scale }) {
  return (
    <SpinnerContainer>
      <Spinner scale={scale} />
    </SpinnerContainer>
  );
}

export default Loader;
