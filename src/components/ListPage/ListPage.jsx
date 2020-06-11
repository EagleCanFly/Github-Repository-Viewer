import s from "./ListPage.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const ListPage = (props) => {

    const totalCount = props.totalCount;
    let pages = [];
    for (let i = 1; i <= 10; i++) {
        pages = [...pages, i];
    }

    return (<div className={s.list}>

        {props.list.map(rep => {
            const date = new Date(rep.pushed_at).toLocaleString('en', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
            });

            return <div key={rep.id} className={s.repository}>
                <NavLink to={'repository/' + rep.id}>{rep.name}</NavLink>

                <span className={s.commit}> <span
                    className={s.stars}>{rep.stargazers_count} stars</span> Last update: {date}</span></div>
        })}

        <div> {pages.map(page => <span className={props.currentPage === page ? s.current_number : s.number} onClick={() => { props.onPageChange(page)}}>{page}</span>)}</div>
    </div>)

};
export default ListPage;