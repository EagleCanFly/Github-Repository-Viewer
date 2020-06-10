import s from "./ListPage.module.css";
import React from "react";

const ListPage = (props) => {
    return <div className={s.list}>
List of repositories
        {props.list.map(rep => {
            return <div>{rep.name} </div>
        })}
    </div>

};
export default ListPage;