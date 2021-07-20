import React from 'react';
import s from './User.module.css';
import ava1 from './ava1.jpg';

const User = (props) => {

    const follow = () => {
        debugger;
        props.follow(props.id);
    }

    const unfollow = () => {
        debugger;
        props.unfollow(props.id);
    }

    //const btn =  props.followed ? <button className={s.subscription__button} onClick={unfollow}>Unfollow</button> : <button className={s.subscription__button} onClick={follow}>Follow</button>

    return (
        <div className={s.user}>
            <div className={s.ava__wrapper}>
                {props.photo === null ? <img src={ava1}/> : <img src={props.photo}/>}
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
                </div>
            </div>
        </div>
    )
}

export default User;