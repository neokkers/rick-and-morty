import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './pagination.scss';

const changePageByDirection = (e, pageNumber, direction, history, itemType) => {
  let page = pageNumber;
  if (e.target.getAttribute('data-disabled') === 'true') return;
  if (direction === 'prev') history.push(`/items/${itemType}/page-${--page}`);
  if (direction === 'next') history.push(`/items/${itemType}/page-${++page}`);
};

const Pagination = ({ pageCount, itemType, pageNumber, history }) => {
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(
      <Link
        to={`/items/${itemType}/page-${i}`}
        key={i}
        className={+pageNumber === i ? 'item selected' : 'item'}
      >
        {i}
      </Link>
    );
  }

  return (
    <div className="pagination" style={{ textAlign: 'center' }}>
      <i
        className="fa fa-angle-left"
        data-disabled={+pageNumber === 1}
        aria-hidden="true"
        onClick={e =>
          changePageByDirection(e, pageNumber, 'prev', history, itemType)
        }
      ></i>
      {pages}
      <i
        className="fa fa-angle-right"
        data-disabled={+pageNumber === +pageCount}
        aria-hidden="true"
        onClick={e =>
          changePageByDirection(e, pageNumber, 'next', history, itemType)
        }
      ></i>
    </div>
  );
};

export default withRouter(Pagination);
