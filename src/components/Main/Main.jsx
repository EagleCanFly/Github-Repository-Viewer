import s from "./Main.module.css";
import React from "react";
import {Route} from "react-router-dom";
import ListPageContainer from "../ListPage/ListPageContainer";
import RepositoryPageContainer from "../RepositoryPage/RepositoryPageContainer";
import SearchContainer from "../Search/SearchContainer";

const Main = () => {

    return <main className={s.main}>
        <Route path='/' exact render={() => <SearchContainer />}/>
        <Route path='/' exact render={() => <ListPageContainer/>}/>
        <Route path='/repository/:id?' render={() => <RepositoryPageContainer/>}/>
    </main>
};
export default Main;