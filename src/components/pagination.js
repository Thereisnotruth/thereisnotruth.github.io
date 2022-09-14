
import * as React from "react"
import PropTypes from "prop-types"

import "../styles/pagination.css"

const Pagination = ({ total, limit, page, line, setPage, setLine }) => {
 // total - 전체 포스트 수
 // limit - 한 페이지에 표시할 포스트 수
 // page - 현재 가리키는 페이지 번호
 // line - pagination에 표현할 페이지 라인 번호
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
        onClick={() => move(line, page - 1)}
        disabled={page === 1}
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
        onClick={() => move(line, page + 1)}
        disabled={page === pages[line-1].length}
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

