import React from 'react';
import s from './DialogItem.module.css';

import ava from './ava.jpg';

const DialogItem = () => {
    return (
        <li className={s.dialog__item}>
            <span>
                <img src={ava} />
            </span>
            <a href="#">Mike</a>
        </li>
    )
}

export default DialogItem;