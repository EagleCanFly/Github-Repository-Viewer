import s from "./ListPage.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const ListPage = (props) => {

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

    return (<div className={s.list}>

        {props.list.map(rep => {
            const date = new Date(rep.pushed_at).toLocaleString('en', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
            });

            const urlPieces = rep.html_url.split('/');
            const nickName = urlPieces[3];

            return <div key={rep.id} className={s.repository}>
                <NavLink className={s.link} to={'/repository/' + rep.id}>{rep.name}</NavLink>
                <span className={s.stars}>{rep.stargazers_count} stars</span>

                <span className={s.right_box}>

                    <span className={s.commit}>Last update: {date}</span> <br/>
                    <a className={s.github} href={rep.html_url} target="_blank">Github</a>
                </span>
            </div>

        })}

        <div> {pages.map((page, i) => <span key={i} className={props.currentPage === page ? s.current_number : s.number}
                                            onClick={() => {
                                                props.onPageChange(page)
                                            }}>{page}</span>)}</div>
    </div>)

};
export default ListPage;