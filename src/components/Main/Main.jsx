import s from "./Main.module.css";
import React from "react";
import {Route} from "react-router-dom";
import ListPageContainer from "../ListPage/ListPageContainer";
import RepositoryPageContainer from "../RepositoryPage/RepositoryPageContainer";

const Main = (props) => {
    let searchArea = React.createRef();

    return <main className={s.main}>
        <div className={s.input__box}>
            <label htmlFor='name'
                   className={s.label}
                   onClick={() => {
                       props.search(props.currentPage, props.searchValue);
                   }}>Search</label>
            <input ref={searchArea}
                   value={props.searchValue}
                   type='text' name='name'
                   className={s.input}

                   onChange={() => {
                       props.onSearchKeyUp(searchArea.current.value);
                   }}

                   onKeyPress={(event) => {
                       if (event.key === "Enter") {
                           props.search(props.currentPage, props.searchValue);
                       }
                   }}/>
        </div>
        {/*<ListPageContainer/>*/}
        <Route path='/' render={() =>  <ListPageContainer/>}/>
        <Route path='/repository/:id?' render={() => <RepositoryPageContainer/>}/>
    </main>


};
export default Main;