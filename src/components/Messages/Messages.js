import React from 'react';
import s from './Messages.module.css';

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

import NewMessageForm from "./NewMessageFrom/NewMessageForm";

const Messages = (props) => {

    const newDialogItems = props.messagesState.dialogItems.map((item) => {
        return <DialogItem key={item.id} name={item.name} id={item.id}/>;
    });

    const newMessages = props.messagesState.messages.map((item)=>{
        return <MessageItem key={item.id} userName={item.userName} message={item.message}/>;
    })

    const submit = (values) => {
        const {newMessageTextarea} = values;
        if(newMessageTextarea) {
            props.addMessage(newMessageTextarea);
        }
    }

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
                    <NewMessageForm onSubmit={submit}/>
                </div>
            </div>
        </div>
    )
}

export default Messages;