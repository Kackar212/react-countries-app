import { useState } from 'react';
import { getCountries } from '@api/api-methods';
import Controls from "@components/Controls";
import { useFetchGet } from '@hooks/useFetchGet';
import { usePagination } from '@hooks/usePagination';
import { useParams } from 'react-router-dom';
import Countries from '@components/Countries';
import { Pagination } from '@components/Pagination';

function Home() {
  const [filterBy, setFilterBy] = useState({});
  const { page } = useParams();

  const {
    response: { data: countries, status, error },
    isLoading,
    isError,
  } = useFetchGet(filterBy, getCountries, { default: [] });
  const { data, navigate, pages } = usePagination({ limit: 20, data: countries, page: page || 1 })

  return (
    <>
      <Controls
        setFilterBy={setFilterBy}
        filterBy={filterBy}
      />
      <Countries
        isLoading={isLoading}
        isError={isError}
        countries={data}
        status={status}
        error={error}
        setFilterBy={setFilterBy}
        filterBy={filterBy}
      />
      <Pagination pages={pages} navigate={navigate} currentPage={+page || 1}/>
    </>
  )
}

export default Home;
