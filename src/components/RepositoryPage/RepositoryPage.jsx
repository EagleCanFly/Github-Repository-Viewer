import s from "./RepositoryPage.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const RepositoryPage = (props) => {
     debugger
    const name = props.items.filter(item => (item.id === props.params.id)).map(item => <span>{item.name}</span>)
    console.log(name)
    return <div>
        <span>Name: {name}</span>
    </div>
};
export default RepositoryPage;