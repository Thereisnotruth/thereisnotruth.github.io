
import * as React from "react"
import PropTypes from "prop-types"

import "../styles/pagination.css"

const Pagination = ({ total, limit, page, line, setPage, setLine }) => {
  const numPages = Math.ceil(total / limit);
  const pages = [];
  let idx = 0;
  for (let i = 1; i <= numPages; i++) {
    if (i % 10 == 1) {
      pages.push([]);
    }
    pages[idx].push(i);
    if (i % 10 == 0) {
      idx++;
    }
  }
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
        onClick={() => {
          setLine(line - 1);
          setPage(Math.floor(page / 10) * 10);        
        }}
        disabled={line === 1}
      >
        &lt;
      </button>
      {
        pages[line - 1]
        .map((i) => (
          <button
            className="pagination-button"
            key={i + 1}
            onClick={() => setPage(i)}
            aria-current={page === i ? "page" : null}
          >
            {i}
          </button>
        ))}
      <button
        className="pagination-button"
        onClick={() => {
          setLine(line + 1);
          setPage(Math.ceil(page / 10) * 10 + 1);
        }}
        disabled={line === pages.length}
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
  line: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  setLine: PropTypes.func.isRequired,
}

export default Pagination

