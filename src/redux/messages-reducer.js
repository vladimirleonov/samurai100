const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE_VALUE = 'CHANGE-NEW-MESSAGE-VALUE';

const messagesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            state.messagesPage.messages.push(
                {
                    id: "4",
                    userName: "Me",
                    message: state.messagesPage.newMessageValue
                }
            )
            state.messagesPage.newMessageValue = '';
            break;
        }
        case 'CHANGE-NEW-MESSAGE-VALUE': {
            state.messagesPage.newMessageValue = action.newMessageText;
            break;
        }
    }
    return state;
}
export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const changeNewMessageActionCreator = (data) => {
    return {
        type: CHANGE_NEW_MESSAGE_VALUE,
        newMessageText: data
    }
}

export default messagesReducer;