import { apiMessages } from '@api/api-errors';
import PropTypes from 'prop-types';
import { ErrorContainer } from './style';

function Error({ status, resource, error, children }) {
  const messages = apiMessages[status];

  return (
    <ErrorContainer>
      <p>{messages ? messages[resource] : error}</p>
      {children}
    </ErrorContainer>
  );
}

Error.propTypes = {
  status: PropTypes.number,
  resource: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.node,
};

export default Error;
