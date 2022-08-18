import { getCountry, getNames } from '@api/api-methods';
import { BackButton } from '@components/BackButton';
import Button from '@components/Button';
import { CountryDetails } from '@components/CountryDetails';
import Error from '@components/Error';
import Loader from '@components/Loader';
import { RESOURCES } from '@config/constants';
import { StyledLink } from '@global-style/';
import { useFetchGet } from '@hooks/useFetchGet';
import { Wrapper } from '@pages/style';
import { unslugify } from '@utilities/string';
import { Link, useParams } from 'react-router-dom';
import { LoadingScreen } from './style';

export function Country() {
  const { country } = useParams();
  const countryName = unslugify(country);
  const {
    response: {
      data, status
    }, 
    isError, 
    isLoading
  } = useFetchGet([countryName], getCountry);
  
  const borders = data?.borders;

  const {
    response: { data: borderCountries },
    isLoading: isLoadingBorderCountries
  } = useFetchGet([borders], getNames, { enabled: !!borders?.length, default: [] });

  return (
    <>
      <Wrapper padding="5rem 5%">
        <BackButton />
      </Wrapper>
      <Wrapper padding="0 5% 5rem">
        {isError && (
          <Error status={status} resource={RESOURCES.COUNTRY}>
            <StyledLink to="/">Go home</StyledLink>
          </Error>
        )}
        { isLoading && <LoadingScreen><Loader /></LoadingScreen> }
        {!isError && data && (
          <CountryDetails
            isLoadingBorderCountries={isLoadingBorderCountries}
            borderCountries={borderCountries}
            { ...data }
          />
        )}
      </Wrapper>
    </>
  );
}
