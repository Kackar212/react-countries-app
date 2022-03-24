import PropTypes from 'prop-types';
import { Field, Label, SearchInput, SearchInputContainer } from './style';

function Search({ onInput, value }) {
  return (
    <Field>
      <SearchInputContainer>
        <SearchInput type="text" id="search" onInput={onInput} value={value} />
        <Label htmlFor="search">Search for a country</Label>
      </SearchInputContainer>
    </Field>
  );
}

Search.propTypes = {
  onInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Search;
