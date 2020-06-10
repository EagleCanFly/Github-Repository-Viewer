import React from 'react';
import s from './App.module.css';
import {BrowserRouter, Route} from "react-router-dom";
import ListPageContainer from "./components/ListPage/ListPageContainer";

function App() {
    return (
        <BrowserRouter>
            <div className={s.container}>
                <header className={s.app__header}>
                    <h1 className={s.app__title}>Github Repository Viewer</h1>
                    <p className={s.app__subtitle}>Thank you for taking the time to check this app out</p>
                </header>
                <main className={s.main}>
                    <div className={s.input__box}>
                        <label htmlFor='name' className={s.label}>Search</label>
                        <input type='text' name='name' className={s.input}/>
                    </div>
                    <Route path="/list" render={() => <ListPageContainer /> }/>
                </main>
            </div>
        </BrowserRouter>

    );
}

export default App;
