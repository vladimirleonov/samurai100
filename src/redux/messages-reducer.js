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
            state.messagesPage.newMessageValue = action.data;
            break;
        }
    }
    return state;
}

export default messagesReducer;