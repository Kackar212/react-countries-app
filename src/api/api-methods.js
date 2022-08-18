import { Api } from './api';

export const getCountries = async ({ region, name }) => {
  const options = { queryParams: {
    fields: ['name', 'population', 'flags', 'region', 'capital'],
  }};

  if (region) {
    return getCountriesByRegion(region);
  } else if (name) {
    return findCountries(name, options);
  }

  return Api.get('all', options);
}

export const getCountriesByRegion = async (region, options = undefined) => {

  return Api.get(`region/${region}`, options);
}

export const findCountries = async (name, options = undefined) => {
  return name ? Api.get(`name/${name}`, options) : getCountries();
}

export const getCountry = async (name) => {
  const { data: country, status } = await Api.get(`name/${name}`, {
    queryParams: {
      fullText: true,
      fields: [
        'name',  
        'flags',
        'population',
        'region',
        'subregion',
        'capital',
        'tld',
        'currencies',
        'languages',
        'borders',
      ]
    }
  });

  return {
    data: country[0],
    status,
  }
}

export const getNames = async (codes) => {
  const { data: countries, status } = await Api.get('alpha', {
    queryParams: {
      fields: ['name'],
      codes,
    }
  });

  return {
    data: countries.map(({ name }) => name.common),
    status,
  }
}
