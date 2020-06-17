import s from "./Search.module.css";
import React from "react";
import search from "./../../images/search.png"
const Search = (props) => {

    let searchArea = React.createRef();

    const onKeyPressHandler = (event) => {
        if (event.key === "Enter") {
            if (props.searchValue !== '') {
                props.search(props.currentPage, props.lastSearchValue);
            } else {props.getTopSorted(10); props.setCurrentPage(1); }
        }
    }
    const onSearchClickHandler = () => {
        if (props.searchValue !== '') {
            props.search(props.currentPage, props.searchValue);
        } else {props.getTopSorted(10); props.setCurrentPage(1); }
    }
    return (
        <div className={s.input__box}>
            <span className={s.label}>Search</span>
            <div className={s.search_line}>
                <input ref={searchArea}
                       value={props.searchValue}
                       type='text' name='name'
                       className={s.input}
                       onChange={() => {props.onSearchKeyUp(searchArea.current.value);}}
                       onKeyPress={(event => onKeyPressHandler(event))}/>
                <span><img className={s.search_icon} src={search} alt="search" onClick={() => {onSearchClickHandler();}}/></span>
            </div>

        </div>
    )
}
export default Search;