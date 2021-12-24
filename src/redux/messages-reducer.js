const ADD_MESSAGE = 'messages/ADD-MESSAGE';

const initialState =  {
    dialogItems: [
        {id: "1", name: "Dimych"},
        {id: "2", name: "Mike"}
    ],
    messages: [
        {id: "1", userName: "Dimych", message: "sfs fsddgfd gdf gfdgdgdf gfghjkh ry"},
        {id: "2", userName: "Me", message: "sdfwre ertreyrt yrtyry yryrgf ddghgtj tuytyrd dfgsdg gg ryryrthf ryrtyrt"},
        {id: "3", userName: "Dimych", message: "qe wer werwrwr wgdghty jjyjju yujyukgf ertd ewdsgdgetw ete"}
    ],
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: '4', userName: 'Me', message: action.newMessageValue}]
            }
        }
        default: {
            return state
        }
    }
}
export const addMessageActionCreator = (newMessageValue) => {
    return {
        type: ADD_MESSAGE,
        newMessageValue
    }
}

export default messagesReducer;