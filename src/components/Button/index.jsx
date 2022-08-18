import { StyledButton } from './style';

function Button({ children, as = 'button', onClick = () => {} }) {
  return <StyledButton as={as} onClick={onClick}>{children}</StyledButton>
}

export default Button;
