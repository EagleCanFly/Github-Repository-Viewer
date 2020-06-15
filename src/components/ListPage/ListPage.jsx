import s from "./ListPage.module.css";
import React from "react";
import {NavLink, Route} from "react-router-dom";
import Pagination from "../Pagination/Pagination";

const ListPage = (props) => {

    return (<div className={s.list}>

        {props.list.map(rep => {
            const date = new Date(rep.pushed_at).toLocaleString('en', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
            });


            return <div key={rep.id} className={s.repository}>
                <NavLink className={s.link} to={'/repository/' + rep.id}>{rep.name}</NavLink>
                <span className={s.stars}>{rep.stargazers_count} stars</span>

                <span className={s.right_box}>

                    <span className={s.commit}>Last update: {date}</span> <br/>
                    <a className={s.github} href={rep.html_url} target="_blank" rel="noopener noreferrer">Github</a>
                </span>
            </div>

        })}
        <Route path='/' render={() => <Pagination list={props.list}
                                                  totalCount={props.totalCount}
                                                  currentPage={props.currentPage}
                                                  onPageChange={props.onPageChange}
                                                  lastSearchValue={props.lastSearchValue}/>}/>

    </div>)

};
export default ListPage;