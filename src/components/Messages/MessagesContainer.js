import React from 'react';

import Messages from "./Messages";

import {addMessageActionCreator} from "../../redux/messages-reducer";
import {connect} from "react-redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {getMessagesPage} from "../../redux/messages-selector";

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
            messagesState: getMessagesPage(state),
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