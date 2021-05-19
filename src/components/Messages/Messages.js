import React from 'react';
import s from './Messages.module.css';

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Messages = () => {
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>
                <DialogItem/>
                <DialogItem/>
            </ul>
            <div className={s.messages}>
                <div className={s.wrapper}>
                    <MessageItem/>
                    <MessageItem/>
                    <MessageItem/>
                </div>
                <div className={s.newMessage}>
                    <form action="#">
                        <input type="text" value="sfsfggd"/>
                        <button type='button'>
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Messages;