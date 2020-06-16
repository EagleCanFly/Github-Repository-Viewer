import s from "./ListPage.module.css";
import React from "react";
import {NavLink, Route} from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import github from "./../../images/github.png";
import Fetching from "../Fetching/Fetching";

const ListPage = (props) => {

    return props.isLoading ? <Fetching/> : (<div className={s.list}>

        {props.list.map(rep => {
            const date = new Date(rep.pushed_at).toLocaleString('en', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
            });


            return <div key={rep.id} className={s.repository}>
                <NavLink className={s.link} to={'/repository/' + rep.id}>★ {rep.name}</NavLink>
                <span className={s.stars}>{rep.stargazers_count} stars</span>

                <span className={s.right_box}>

                    <span className={s.commit}>Updated: {date}</span>
                    <a className={s.github} href={rep.html_url} target="_blank" rel="noopener noreferrer"><img src={github}
                                                                                                               alt="Github"/></a>
                </span>
            </div>

        })}
        <Route path='/' render={() => <Pagination list={props.list}
                                                  totalCount={props.totalCount}
                                                  currentPage={props.currentPage}
                                                  onPageChange={props.onPageChange}
                                                  lastSearchValue={props.lastSearchValue}
                                                  currentPortion={props.currentPortion}
                                                  setCurrentPortion={props.setCurrentPortion}
                                                  refresh={props.refresh}/>}/>

    </div>)

};
export default ListPage;