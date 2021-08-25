import React from 'react';

import Messages from "./Messages";

import {addMessageActionCreator, changeNewMessageActionCreator} from "../../redux/messages-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";

class MessagesContainerSecond extends React.Component {
    render() {
        return (
            <Messages messagesState={this.props.messagesState}/>
        )
    }
}

const mapStateToProps = (state) => {
    return (
        {
            messagesState: state.messagesPage,
            isAuth: state.auth.isAuth
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

const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(MessagesContainerSecond);

export default WithAuthRedirect(MessagesContainer);