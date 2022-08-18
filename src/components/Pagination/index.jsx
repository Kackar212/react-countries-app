import { PaginationItem } from './style';
import { PaginationContainer } from './style';

export function Pagination({ navigate, pages, currentPage }) {
  return (
    <PaginationContainer>
      {pages.map(page => (
        <PaginationItem
          key={page}
          onClick={navigate}
          data-page={page}
          to={`/page/${page}`}
          $isCurrent={page === currentPage}
        >{page}</PaginationItem>
      ))}
    </PaginationContainer>
  );
}
