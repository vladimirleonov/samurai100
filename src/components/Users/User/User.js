import React from 'react';
import s from './User.module.css';
import ava1 from './ava1.jpg';
import {NavLink} from "react-router-dom";
import * as axios from 'axios';
import {usersAPI} from "../../../api/api";
const User = (props) => {

        usersAPI.follow(props.id)
            .then((data) => {
                if(data.resultCode === 0) { //follow happened
                    debugger;
                    props.follow(props.id);
                }
            })

        usersAPI.unfollow(props.id)
            .then((data) => {
                if(data.resultCode === 0) { //unfollow happened
                    debugger;
                    props.unfollow(props.id);
                }
            })

    const btn =  props.followed ?
        <button className={s.subscription__button} onClick={usersAPI.unfollow}>Unfollow</button> :
        <button className={s.subscription__button} onClick={usersAPI.follow}>Follow</button>

    return (
        <div className={s.user}>
            <div className={s.ava__wrapper}>
                <NavLink to={`/profile/${props.id}`}>
                {props.photo === null ? <img src={ava1}/> : <img src={props.photo}/>}
                </NavLink>
            </div>
            <div className={s.content}>
                <div className={s.text__wrapper}>
                    <span className={s.name}>{props.name}</span>
                    <span className={s.location}>
                                <span className={s.city}>{props.city}</span>
                                <span>, </span>
                                <span className={s.country}>{props.country}</span>
                            </span>
                    <span className={s.status}>
                        {props.status != null ? props.status : 'I learn js'}
                        {props.status}
                    </span>
                </div>
                <div className={s.button__wrapper}>
                    {btn}
                </div>
            </div>
        </div>
    )
}

export default User;