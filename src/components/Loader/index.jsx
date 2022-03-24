import PropTypes from 'prop-types';
import { Spinner, SpinnerContainer } from './style';

function Loader({ scale }) {
  return (
    <SpinnerContainer>
      <Spinner scale={scale} />
    </SpinnerContainer>
  );
}

Loader.propTypes = {
  scale: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Loader;
