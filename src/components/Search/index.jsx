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

export default Search;
