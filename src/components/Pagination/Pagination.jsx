import s from "../ListPage/ListPage.module.css";
import React from "react";

const Pagination = (props) => {
    const totalCount = props.totalCount;
    let pages = [];

    let current = props.currentPage;

    if (current < 2) {

        pages = [current, current + 1, current + 2];
    } else {
        pages = [current - 2, current - 1, current, current + 1, current + 2];
    }
    pages = pages.filter(num => {
        return (!num == 0 || !num < 0 || !num == -1)
    })
    return  <div> {pages.map((page, i) => <span key={i} className={props.currentPage === page ? s.current_number : s.number}
                                                onClick={() => {
                                                    props.onPageChange(page, props.lastSearchValue);
                                                }}>{page}</span>)}</div>
}
export default Pagination;