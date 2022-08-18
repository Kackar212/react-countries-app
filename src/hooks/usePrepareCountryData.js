export function usePrepareCountryData (countryData) {
  const {
    name: {
      common: name,
      nativeName,
    }, 
    flags: [flag],
    population,
    region,
    subregion,
    capital,
    tld,
    borderCountries,
    isLoadingBorderCountries,
  } = countryData;

  const nativeNameLanguages = Object.keys(nativeName);
  const nativeNameLanguage = nativeNameLanguages.pop();
  const { common } = nativeName[nativeNameLanguage];

  const currencies = Object
    .values(countryData.currencies)
    .map(({ name }) => name)
    .join(', ');
  
  const languages = Object
    .values(countryData.languages)
    .join(', ');

  return {
    name,
    flag,
    details: Object.entries({
      nativeName: common,
      population,
      region,
      subRegion: subregion,
      capital: capital && capital.join(', '),
      topLevelDomain: tld[0],
      currencies,
      languages,
    }),
    borderCountries,
    isLoading: isLoadingBorderCountries,
  };
}
