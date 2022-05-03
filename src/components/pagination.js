
import * as React from "react"
import PropTypes from "prop-types"

import "../styles/pagination.css"

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);
  console.log(total + " " + limit)
  return (
    <div className="pagination">
      <button
        className="pagination-button-tofirst"
        onClick={() => setPage(1)}
        disabled={page === 1}
      >
        First
      </button>
      <button
        className="pagination-button"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        &lt;
      </button>
      {
        Array(numPages)
        .fill()
        .map((_, i) => (
          <button
            className="pagination-button"
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </button>
        ))}
      <button
        className="pagination-button"
        onClick={() => setPage(page + 1)}
        disabled={page === numPages}
      >
        &gt;
      </button>
      <button
        className="pagination-button-tolast"
        onClick={() => setPage(numPages)}
        disabled={page === numPages}
      >
        Last
      </button>
    </div>
  )
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired
}

export default Pagination

