import s from "./Main.module.css";
import React from "react";
import {NavLink, Redirect, Route} from "react-router-dom";
import ListPageContainer from "../ListPage/ListPageContainer";
import RepositoryPageContainer from "../RepositoryPage/RepositoryPageContainer";

const Main = (props) => {
    let searchArea = React.createRef();

    return <main className={s.main}>
        <div className={s.input__box}>
            <NavLink to='/list/'  className={s.label} onClick={() => { props.search(props.currentPage, props.searchValue);}}>Search</NavLink>
            {/*<label htmlFor='name'*/}
            {/*       className={s.label}*/}
            {/*       onClick={() => {*/}
            {/*           props.search(props.currentPage, props.searchValue);*/}
            {/*       }}>Search</label>*/}
            <input ref={searchArea}
                   value={props.searchValue}
                   type='text' name='name'
                   className={s.input}

                   onChange={() => {
                       props.onSearchKeyUp(searchArea.current.value);
                   }}

                   onKeyPress={(event) => {
                       if (event.key === "Enter") {
                           alert('Please, use "Search" button.');
                           // props.search(props.currentPage, props.searchValue);
                       }
                   }}/>
        </div>
        {/*<ListPageContainer/>*/}
        <Route path='/list' render={() =>  <ListPageContainer/>}/>
        <Route path='/repository/:id?' render={() => <RepositoryPageContainer/>}/>
    </main>


};
export default Main;