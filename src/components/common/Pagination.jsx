import React, { useState } from "react";

export default function Pagination({
  range = 20,
  pageNumber = 1,
  onButtonClick,
  onPrevClick,
  onNextClick,
}) {
  return (
    <div className="pagination justify-center">
      <button
        onClick={() => onPrevClick(pageNumber)}
        className="pagination__button customStylePaginationPre button text-white mr-15 -prev"
      >
        <i className="icon-arrow-left text-15"></i>
      </button>

      <div className="pagination__count">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => onButtonClick(1)}
          className={pageNumber == 1 ? `is-active` : ""}
        >
          1
        </div>
        {range > 1 && (
          <div
            style={{ cursor: "pointer" }}
            href="#"
            onClick={() => onButtonClick(2)}
            className={pageNumber == 2 ? `is-active` : ""}
          >
            2
          </div>
        )}
        {range > 2 && (
          <div
            style={{ cursor: "pointer" }}
            href="#"
            onClick={() => onButtonClick(3)}
            className={pageNumber == 3 ? `is-active` : ""}
          >
            3
          </div>
        )}
        {range > 3 && (
          <div
            style={{ cursor: "pointer" }}
            href="#"
            onClick={() => onButtonClick(4)}
            className={pageNumber == 4 ? `is-active` : ""}
          >
            4
          </div>
        )}

        {pageNumber == 5 && range != 5 && (
          <div
            style={{ cursor: "pointer" }}
            href="#"
            onClick={() => onButtonClick(5)}
            className={pageNumber == 5 ? `is-active` : ""}
          >
            5
          </div>
        )}

        {range > 5 && <div>...</div>}
        {pageNumber > 5 && pageNumber < range && (
          <div style={{ cursor: "pointer" }} href="#" className="is-active">
            {pageNumber}
          </div>
        )}
        {range > 4 && (
          <div
            style={{ cursor: "pointer" }}
            href="#"
            onClick={() => onButtonClick(range)}
            className={pageNumber == range ? `is-active` : ""}
          >
            {range}
          </div>
        )}
      </div>

      <button
        onClick={() => onNextClick(pageNumber)}
        className="pagination__button customStylePaginationNext button text-white ml-15 -next"
      >
        <i className="icon-arrow-right text-15"></i>
      </button>
    </div>
  );
}
