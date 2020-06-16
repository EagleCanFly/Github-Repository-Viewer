import s from "./RepositoryPage.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const RepositoryPage = (props) => {


    let rep = props.items.filter(rep => rep.id == props.params.id);
    return <div key={rep.id} className={s.container}>
        <NavLink to='/' className={s.return} >Return</NavLink>
    <div><span className={s.label}>Repository name: </span>{rep.map(rep => <span key={rep.id}>{rep.name}</span>)}</div>
    <div><span className={s.label}>Stars: </span>{rep.map(rep => <span key={rep.id}>{rep.stargazers_count}</span>)}</div>
    <div><span className={s.label}>Last commit: </span>{rep.map(rep => {
        const date = new Date(rep.pushed_at).toLocaleString('en', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
       return <span key={rep.id} >{date}</span>})}</div>

    <div>{rep.map(rep => <img key={rep.id} className={s.avatar} src={rep.owner.avatar_url} alt='avatar'/>)}</div>
    <div><span className={s.label}>Nickname: </span>{rep.map(rep => <a key={rep.id} href={rep.owner.html_url} target='_blank' rel="noopener noreferrer" className={s.nickname}>{rep.owner.login}</a>)}</div>

    <div><span className={s.label}>Programming languages: </span>{rep.map(rep => <span key={rep.id} >{rep.language}</span>)}</div>
    <div><span className={s.label}>Description: </span>{rep.map(rep => <span key={rep.id} >{rep.description}</span>)}</div>
    <div><span className={s.label}>Contributors: </span>{props.contributors.filter((item,i) => i < 10 ).map((item,i) => <span key={i} className={s.contributor}>{item.login}, </span>)}</div>
</div>
};
export default RepositoryPage;
