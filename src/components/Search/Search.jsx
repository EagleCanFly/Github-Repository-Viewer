import s from "../Main/Main.module.css";
import React from "react";

const Search = (props) => {
    let searchArea = React.createRef();
    return (
        <div className={s.input__box}>
            <span className={s.label} onClick={() => {
                if (props.searchValue !== '') {
                    props.search(props.currentPage, props.searchValue);
                }
            }}>Search</span>
            <input ref={searchArea}
                   value={props.searchValue}
                   type='text' name='name'
                   className={s.input}

                   onChange={() => {
                       props.onSearchKeyUp(searchArea.current.value);
                   }}

                   onKeyPress={(event) => {
                       if (event.key === "Enter") {
                           props.search(props.currentPage, props.lastSearchValue);
                       }
                   }}/>
        </div>
    )
}
export default Search;