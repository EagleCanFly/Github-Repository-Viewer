import s from "../Pagination/Pagination.module.css";
import React from "react";

const Pagination = (props) => {
    const totalPages = Math.ceil(props.totalCount / 10);

    const portionSize = 10;

    let currentPortion = props.currentPortion;

    let pages = [];

    for (let i = 1; i < totalPages; ++i) {
        pages.push(i);
    }

    let totalPortions = Math.ceil(totalPages / portionSize);

    if (totalPortions >= 10) {
        totalPortions = 10;
    }
    let leftBorder = (currentPortion - 1) * portionSize + 1;
    let rightBorder = currentPortion * portionSize;

    pages = pages.filter(page => page >= leftBorder && page <= rightBorder);

    return <div className={s.pages_row}> {currentPortion > 1
        ? <span onClick={() => {props.setCurrentPortion(currentPortion - 1); props.setReps(props.list) /* обновляю state, чтобы перезаписать local storage*/}}>Back</span>
        : <span className={s.disabled}>Prev</span>}
        {pages.map((page, i) => <span key={i}
                                      className={props.currentPage === page ? s.current_number : s.number}
                                      onClick={() => {
                                          props.onPageChange(page, props.lastSearchValue);
                                      }}>{page}</span>)} {currentPortion < totalPortions
            ? <span onClick={() => {props.setCurrentPortion(currentPortion + 1); props.setReps(props.list)}}>Next</span>
            : <span className={s.disabled}>Next</span>}</div>
}
export default Pagination;