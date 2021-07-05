import React from 'react';

import Messages from "./Messages";

import {addMessageActionCreator, changeNewMessageActionCreator} from "../../redux/messages-reducer";
import StoreContext from "../../StoreContext";

const MessagesContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    const state = store.getState();

                    debugger;

                    const onAddMessage = () => {
                        store.dispatch(addMessageActionCreator());
                    }

                    const onChangeNewMessageValue = (text) => {
                        store.dispatch(changeNewMessageActionCreator(text));
                    }

                    return (
                        <Messages messagesState={state.messagesPage} onAddMessage={onAddMessage} onChangeNewMessageValue={onChangeNewMessageValue}/>
                    )
                }
        }
        </StoreContext.Consumer>
    )
}

export default MessagesContainer;