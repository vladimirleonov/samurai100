const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE_VALUE = 'CHANGE-NEW-MESSAGE-VALUE';

const defaultObj =  {
    dialogItems: [
        {id: "1", name: "Dimych"},
        {id: "2", name: "Mike"}
    ],
        messages: [
        {id: "1", userName: "Dimych", message: "sfs fsddgfd gdf gfdgdgdf gfghjkh ry"},
        {id: "2", userName: "Me", message: "sdfwre ertreyrt yrtyry yryrgf ddghgtj tuytyrd dfgsdg gg ryryrthf ryrtyrt"},
        {id: "3", userName: "Dimych", message: "qe wer werwrwr wgdghty jjyjju yujyukgf ertd ewdsgdgetw ete"}
    ],
        newMessageValue: ''
}

const messagesReducer = (state = defaultObj, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            state.messages.push(
                {
                    id: "4",
                    userName: "Me",
                    message: state.newMessageValue
                }
            )
            state.newMessageValue = '';
            break;
        }
        case 'CHANGE-NEW-MESSAGE-VALUE': {
            state.newMessageValue = action.newMessageText;
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