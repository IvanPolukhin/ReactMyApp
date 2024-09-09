import React from "react";
import { usePagination } from "../../hooks/usePagination";

const Pagination = ({ totalPages, page, changePage }) => {
  const pagesArray = usePagination(totalPages);
  return (
    <div className="page__wrapper">
      {pagesArray.map((i) => (
        <span
          onClick={() => changePage(i)}
          key={i}
          className={page === i ? "page page__current" : "page"}
        >
          {i}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
