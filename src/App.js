import React  from 'react';
import s from './App.module.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {

    return (
        <BrowserRouter>
            <div className={s.container}>
                <Header/>
                <Main/>
            </div>
        </BrowserRouter>
    );
}

export default App;
