import s from "./ListPage.module.css";
import p from "./Pagination.module.css";
import React from "react";
import {NavLink, Route} from "react-router-dom";
import github from "./../../images/github.png";
import Fetching from "../Fetching/Fetching";
import Pagination from "react-js-pagination";

const ListPage = (props) => {

    return props.isLoading ? <Fetching/> : (<div className={s.list}>

        {props.items.map(rep => {
            const date = new Date(rep.pushed_at).toLocaleString('en', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });


            return <div key={rep.id} className={s.repository}>
                <NavLink className={s.link} to={'/repository/' + rep.id}>★ {rep.name}</NavLink>
                <span className={s.stars}>{rep.stargazers_count} stars</span>
                <span className={s.commit}>Updated: {date}</span>
                <a className={s.github} href={rep.html_url} target="_blank" rel="noopener noreferrer"><img src={github}
                                                                                                           alt="Github"/></a>
            </div>

        })}
        <Route path='/' render={() => <Pagination
            activePage={props.currentPage}
            itemsCountPerPage={10}
            totalItemsCount={props.totalCount > 1000 ? 1000 : props.totalCount} // api не отдает более 1000 реп-ев
            pageRangeDisplayed={5}
            onChange={props.onPageChange}
            hideDisabled={true}
            linkClass={p.number}
            activeClass={p.current_number}
            innerClass={p.pages_row}/>}/>

    </div>)

};
export default ListPage;