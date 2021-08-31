import React from 'react';

import Messages from "./Messages";

import {addMessageActionCreator, changeNewMessageActionCreator} from "../../redux/messages-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class MessagesContainerSecond extends React.Component {
    render() {
        return (
            <Messages messagesState={this.props.messagesState} addMessage={this.props.addMessage}/>
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

/*const mapDispatchToProps = (dispatch) => {
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
}*/

const MessagesContainer = compose(
    WithAuthRedirect,
    connect(mapStateToProps, {
        addMessage: addMessageActionCreator
    })
)(MessagesContainerSecond);

export default MessagesContainer;