import React from 'react';

import Messages from "./Messages";

import {addMessageActionCreator, changeNewMessageActionCreator} from "../../redux/messages-reducer";

const Messages = (props) => {

    const onAddMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    const onChangeNewMessageValue = (text) => {
        props.dispatch(changeNewMessageActionCreator(text));
    }

    return (
       <Messages messagesState={props.messagesState} onAddMessage={onAddMessage} onChangeNewMessageValue={onChangeNewMessageValue}/>
    )
}

export default Messages;