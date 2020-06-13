import s from "./Header.module.css";
import React from "react";

const Header = () => {

    return <header className={s.app__header}>
        <h1 className={s.app__title}>Github Repository Viewer</h1>
        <p className={s.app__subtitle}>Thank you for taking the time to check this app out</p>
    </header>

};
export default Header;