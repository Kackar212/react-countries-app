import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function usePagination({ limit, data = [], page = 1 }) {
  const isDataArray = Array.isArray(data);
  const [paginationData, setPaginationData] = useState(isDataArray ? data : []);
  const [pages, setPages] = useState([]);
  const navigate = useNavigate();

  const navigateTo = () => {
    if (!Array.isArray(data)) {
      return setPaginationData([]);
    }

    const start = (page - 1) * limit;
    const paginatedData = data.slice(start, start + limit);

    setPaginationData(paginatedData);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    const pages = [];

    for (let i = 0; i < data.length / limit; i++) {
      pages.push(i + 1);
    }
    
    if (pages.length && pages.length < page) {
      navigate(`/page/${pages.length}`);
    }

    setPages(pages);

    navigateTo();
  }, [data, page]);

  return { data: paginationData, navigate: navigateTo, pages };
}
