import debounce from 'lodash.debounce';
import { useCallback, useState, useEffect } from 'react';
import Search from '.';

function SearchContainer({ setFilterBy, filterBy = {} }) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (filterBy.region !== false && filterBy.region !== undefined) {
      setInputValue('');
    }
  }, [filterBy.region]);

  const getData = useCallback(
    debounce((name) => setFilterBy({ name, region: false }), 500), []
  )

  const searchCountries = ({ target: { value: searchedValue } }) => {
    setInputValue(searchedValue);
    getData(searchedValue);
  };
  
  return <Search onInput={searchCountries} value={inputValue} />
}

export { SearchContainer };
