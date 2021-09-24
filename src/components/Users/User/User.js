import React from 'react';
import s from './User.module.css';
import ava1 from './ava1.jpg';
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../api/api";
const User = (props) => {

    const follow = () => {
        props.toggleBtnCondition(props.id);
        usersAPI.follow(props.id)
            .then((data) => {
                if(data.resultCode === 0) { //follow happened
                    props.toggleBtnCondition(props.id);
                    props.follow(props.id);
                }
            })
    }

    const unfollow = () => {
        props.toggleBtnCondition(props.id);
        usersAPI.unfollow(props.id)
            .then((data) => {
                if(data.resultCode === 0) { //unfollow happened
                    props.toggleBtnCondition(props.id);
                    props.unfollow(props.id);
                }
            })
    }

    const btn =  props.followed ?
        <button disabled={props.disabledBtnsArr.some(item => item === props.id)} className={s.subscription__button} onClick={unfollow}>Unfollow</button> :
        <button disabled={props.disabledBtnsArr.some(item => item === props.id)} className={s.subscription__button} onClick={follow}>Follow</button>

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
                        {props.status != null && props.status }
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