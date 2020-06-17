import s from "./Search.module.css";
import React from "react";
import search from "./../../images/search.png"
const Search = (props) => {
    let searchArea = React.createRef();
    return (
        <div className={s.input__box}>
            <span className={s.label}>Search</span>
            <div className={s.search_line}>
                <input ref={searchArea}
                       value={props.searchValue}
                       type='text' name='name'
                       className={s.input}

                       onChange={() => {
                           props.onSearchKeyUp(searchArea.current.value);
                       }}

                       onKeyPress={(event) => {
                           if (event.key === "Enter") {
                               if (props.searchValue !== '') {
                                   props.search(props.currentPage, props.lastSearchValue);
                               } else {props.getTopTen(); props.setCurrentPage(1); }
                           }
                       }}/>
                <span><img className={s.search_icon} src={search} alt="S" onClick={() => {
                    if (props.searchValue !== '') {
                        props.search(props.currentPage, props.searchValue);
                    } else {props.getTopTen(); props.setCurrentPage(1); }
                }}/></span>
            </div>

        </div>
    )
}
export default Search;