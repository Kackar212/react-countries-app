import { StyledBackButton } from './style';
import { ReactComponent as Arrow } from '@assets/arrow.svg';
import { useGoBack } from '@hooks/useGoBack';

export function BackButton() {
  const goBack = useGoBack();

  return (
    <StyledBackButton onClick={goBack}>
      <Arrow /> Back
    </StyledBackButton>
  )
}
