import s from "../Main/Main.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const Search = (props) => {
    let searchArea = React.createRef();
    return (
        <div className={s.input__box}>
            <NavLink to='/list/' className={s.label} onClick={() => {
                if (props.searchValue !== '') {
                    props.search(props.currentPage, props.searchValue);
                }
            }}>Search</NavLink>
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
                           // alert('Please, use "Search" button.');
                           props.search(props.currentPage, props.lastSearchValue);
                       }
                   }}/>
        </div>
    )
}
export default Search;