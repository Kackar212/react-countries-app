import Countries from "@components/Countries";
import Loader from '@components/Loader';

function HomePage({ isError, status, countries, isLoading, error, getCountries }) {
  return (
    <Countries
      isError={isError}
      status={status}
      countries={countries}
      error={error}
      getCountries={getCountries}
      isLoading={isLoading}
    />
  )
}

export default HomePage;
