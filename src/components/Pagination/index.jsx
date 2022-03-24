import PropTypes from 'prop-types';
import { PaginationItem } from './style';
import { PaginationContainer } from './style';

function Pagination({ navigate, pages, currentPage = 1 }) {
  return (
    <PaginationContainer>
      {pages.map((page) => (
        <PaginationItem
          key={page}
          onClick={navigate}
          data-page={page}
          to={`/page/${page}`}
          $isCurrent={page === currentPage}
        >
          {page}
        </PaginationItem>
      ))}
    </PaginationContainer>
  );
}

Pagination.propTypes = {
  navigate: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(PropTypes.number).isRequired,
  currentPage: PropTypes.number,
};

export default Pagination;
