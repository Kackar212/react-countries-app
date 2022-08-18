import {
  BorderCountries,
  BorderCountriesHeading,
  BorderCountry, CountryDetailsFlag, CountryDetailsWrapper,
  CountryInfo, CountryInfoContainer, CountryInfoWrapper,
  CountryName
} from "@components/CountryDetails/style";
import { Flag } from "@components/Flag";
import Loader from "@components/Loader";
import { usePrepareCountryData } from "@hooks/usePrepareCountryData";
import { slugify, unCamelCase } from "@utilities/string";

export function CountryDetails(props) {
  const { details, name, flag, borderCountries, isLoading } = usePrepareCountryData(props);

  const renderCountryInfo = ([informationName, informationValue], index) => (
    <CountryInfo key={informationName} index={index} hide={!informationValue}>
      <span>{unCamelCase(informationName)}:</span> { informationValue }
    </CountryInfo>
  )

  return (
    <>
      <CountryDetailsFlag>
        <Flag src={flag} name={name} fit/>
      </CountryDetailsFlag>
      <CountryDetailsWrapper>
        <CountryName>
          {name}
        </CountryName>
        <CountryInfoContainer>
          <CountryInfoWrapper>
            {details.slice(0, 5).map(renderCountryInfo)}
          </CountryInfoWrapper>
          <CountryInfoWrapper>
            {details.slice(5).map(renderCountryInfo)}
          </CountryInfoWrapper>
        </CountryInfoContainer>
        <BorderCountries>
          <BorderCountriesHeading>
            Border countries:
          </BorderCountriesHeading>
          { isLoading && <Loader /> }
          {borderCountries && borderCountries.map((name) => (
            <BorderCountry key={name} to={`/${slugify(name)}`}>{name}</BorderCountry>
          ))}
        </BorderCountries>
      </CountryDetailsWrapper>
    </>
  );
}
