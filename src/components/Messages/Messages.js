import React from 'react';
import s from './Messages.module.css';

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Messages = () => {
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Mike" id="2"/>
            </ul>
            <div className={s.messages}>
                <div className={s.wrapper}>
                    <MessageItem userName="Dimych" message="sfs fsddgfd gdf gfdgdgdf gfghjkh ry"/>
                    <MessageItem userName="Me" message="sdfwre ertreyrt yrtyry yryrgf ddghgtj tuytyrd dfgsdg gg ryryrthf ryrtyrt ydf"/>
                    <MessageItem userName="Dimych" message="qe wer werwrwr wgdghty jjyjju yujyukgf ertd ewdsgdgetw ete"/>
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