import React from 'react';
import s from './MessageItem.module.css';

import ava from './ava1.png';

const MessageItem = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.descr}>
                <img src={ava} alt="#" />
                <div className={s.name}>dfgdfgdf</div>
            </div>
            <div className={s.message}>dfgfdgdfg gdf gdf g dfg d fgdfgdfg sgdfg</div>
        </div>
    )
}

export default MessageItem;