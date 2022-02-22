import React from "react";

// input: pageNumber, prevHandler, nextHandler
// output: jsx

const Pagination = ({ pageNumber, onPrevBtn, onNextBtn }) => {
return (
  <div className="pagination">
    <button className="btn" onClick={onPrevBtn}>←</button>
    <span className="pagination__page">{pageNumber}</span>
    <button className="btn" onClick={onNextBtn}>→</button>
  </div>
);
}

export default Pagination;