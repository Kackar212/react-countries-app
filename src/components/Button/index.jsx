import PropTypes from 'prop-types';
import { StyledButton } from './style';

function Button({ children, as = 'button', onClick = () => {} }) {
  return (
    <StyledButton as={as} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClick: PropTypes.func,
};

export default Button;
