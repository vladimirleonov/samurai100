import React from 'react';

import Messages from "./Messages";

import {addMessageActionCreator, changeNewMessageActionCreator} from "../../redux/messages-reducer";
import {connect} from "react-redux";

/*const MessagesContainer = (props) => {
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
}*/

const mapStateToProps = (state) => {
    return (
        {
            messagesState: state.messagesPage
        }
    )
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            onAddMessage() {
                dispatch(addMessageActionCreator());
            },
            onChangeNewMessageValue(text) {
                dispatch(changeNewMessageActionCreator(text));
            }
        }
    )
}

const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages);

export default MessagesContainer;