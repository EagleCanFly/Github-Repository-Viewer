import s from "./RepositoryPage.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const RepositoryPage = (props) => {

    let rep = props.items.filter(rep => rep.id == props.params.id);
    return <div key={rep.id}>
        <NavLink to='/' className={s.return} >Return</NavLink>
    <div>Repository Name: {rep.map(rep => <span>{rep.name}</span>)}</div>
    <div>Stars: {rep.map(rep => <span>{rep.stargazers_count}</span>)}</div>
    <div>Last commit: {rep.map(rep => <span>{rep.pushed_at}</span>)}</div>

    <div>{rep.map(rep => <img className={s.avatar} src={rep.owner.avatar_url}/>)}</div>
    <div>Nickname: {rep.map(rep => <a href={rep.owner.html_url} target='_blank'>{rep.owner.login}</a>)}</div>

    <div>Programming languages: {rep.map(rep => <span>{rep.language}</span>)}</div>
    <div>Description: {rep.map(rep => <span>{rep.description}</span>)}</div>
    <div>Contributors: {props.contributors.map(item => <div>{item.login}</div>)}</div>
</div>
};
export default RepositoryPage;
