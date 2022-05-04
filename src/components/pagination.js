
import * as React from "react"
import PropTypes from "prop-types"

import "../styles/pagination.css"

const Pagination = ({ total, limit, page, line, setPage, setLine }) => {
  const numPages = Math.ceil(total / limit);
  const pages = [];
  let idx = 0;
  for (let i = 1; i <= numPages; i++) {
    if (i % 10 === 1) {
      pages.push([]);
    }
    pages[idx].push(i);
    if (i % 10 === 0) {
      idx++;
    }
  }

  const move = (line, page) => {
    document.getElementsByClassName("right")[0].scrollTo(0, 0);
    setLine(line);
    setPage(page);
  }
  return (
    <div className="pagination">
      <button
        className="pagination-button-tofirst"
        onClick={() => move(1, 1)}
        disabled={page === 1}
      >
        First
      </button>
      <button
        className="pagination-button"
        onClick={() => move(line - 1, (Math.ceil(page / 10) - 1) * 10)}
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
            onClick={() => move(line, i)}
            aria-current={page === i ? "page" : null}
          >
            {i}
          </button>
        ))}
      <button
        className="pagination-button"
        onClick={() => move(line + 1, Math.ceil(page / 10) * 10 + 1)}
        disabled={line === pages.length}
      >
        &gt;
      </button>
      <button
        className="pagination-button-tolast"
        onClick={() => move(pages.length, numPages)}
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

