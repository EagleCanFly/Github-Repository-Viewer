import s from "../Pagination/Pagination.module.css";
import React from "react";

const Pagination = (props) => {
    const totalPages = Math.ceil(props.totalCount / 10);
    let pages = [];

    let current = props.currentPage;

    if (current < 2) {

        pages = [current, current + 1, current + 2, '. . .', totalPages];

    } else if (current >= 4 && current <= totalPages - 2) {

        pages = [1, '. . .', current - 2, current - 1, current, current + 1, current + 2, '. . .', totalPages];

    } else if (current == totalPages) {

        pages = [1, '. . .', current - 2, current - 1, current,];

    } else {

        pages = [current - 2, current - 1, current, current + 1, current + 2];

    }
    pages = pages.filter(num => {
        return (!num == 0 || !num < 0 || !num == -1)
    })
    return <div className={s.pages_row}> {pages.map((page, i) => <span key={i}
                                                                       className={props.currentPage === page ? s.current_number : page === '. . .' ? s.disabled : s.number}
                                                                       onClick={() => {
                                                                           props.onPageChange(page, props.lastSearchValue);
                                                                       }}>{page}</span>)}</div>
}
export default Pagination;