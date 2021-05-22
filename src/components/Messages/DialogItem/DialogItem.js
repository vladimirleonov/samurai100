import React from 'react';
import s from './DialogItem.module.css';

import ava from './ava.jpg';

import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <li className={s.dialog__item} >
            <NavLink activeClassName={s.active} to={`/messages/${props.id}`}>
                <div className={s.img__wrapper}>
                    <img src={ava} alt="user_ava"/>
                </div>
                <span className={s.user__name}>{props.name}</span>
            </NavLink>
        </li>
    )
}

export default DialogItem;