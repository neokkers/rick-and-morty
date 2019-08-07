import React from 'react';
import { Link } from 'react-router-dom';
import './pagination.scss';

const Pagination = ({ pageCount, itemType, pageNumber }) => {
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
      {pages}
    </div>
  );
};

export default Pagination;
