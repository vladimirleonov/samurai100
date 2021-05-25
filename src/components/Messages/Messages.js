import React from 'react';
import s from './Messages.module.css';

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Messages = () => {

    const dialogItems = [
        {id: "1", name: "Dimych"},
        {id: "2", name: "Mike"}
    ];

    const newDialogItems = dialogItems.map((item) => {
        return <DialogItem name={item.name} id={item.id}/>;
    });

    const messages = [
        {id: "", userName: "Dimych", message: "sfs fsddgfd gdf gfdgdgdf gfghjkh ry"},
        {id: "", userName: "Me", message: "sdfwre ertreyrt yrtyry yryrgf ddghgtj tuytyrd dfgsdg gg ryryrthf ryrtyrt"},
        {id: "", userName: "Dimych", message: "qe wer werwrwr wgdghty jjyjju yujyukgf ertd ewdsgdgetw ete"}
    ];

    const newMessages = messages.map((item)=>{
        return <MessageItem userName={item.userName} message={item.message}/>;
    })

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>
                {newDialogItems}
            </ul>
            <div className={s.messages}>
                <div className={s.wrapper}>
                    {newMessages}
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