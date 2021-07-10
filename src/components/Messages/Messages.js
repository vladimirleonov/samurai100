import React from 'react';
import s from './Messages.module.css';

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Messages = (props) => {

    debugger;

    const newDialogItems = props.messagesState.dialogItems.map((item) => {
        return <DialogItem key={item.id} name={item.name} id={item.id}/>;
    });

    const newMessages = props.messagesState.messages.map((item)=>{
        return <MessageItem key={item.id} userName={item.userName} message={item.message}/>;
    })

    const textareaRef = React.createRef();

    const onAddMessage = () => {
        props.onAddMessage();
        /*props.dispatch(addMessageActionCreator());*/
    }

    const onChangeNewMessageValue = () => {
        props.onChangeNewMessageValue(textareaRef.current.value);
        /*props.dispatch(changeNewMessageActionCreator(textareaRef.current.value));*/
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
                    <form action="#">
                        <input type="text" onChange={onChangeNewMessageValue} ref={textareaRef} value={props.messagesState.newMessageValue}/>
                        <button onClick={onAddMessage} type='button'>
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Messages;