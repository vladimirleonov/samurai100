import React from 'react';
import s from './MessageItem.module.css';

import ava from './ava1.png';

const MessageItem = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.descr}>
                <img src={ava} alt="#" />
                <div className={s.name}>{props.userName}</div>
            </div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

export default MessageItem;