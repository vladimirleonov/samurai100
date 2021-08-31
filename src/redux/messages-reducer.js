const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE_VALUE = 'CHANGE-NEW-MESSAGE-VALUE';

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
    /*newMessageValue: ''*/
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            /*const newMessage = {
                    id: "4",
                    userName: "Me",
                    message: state.newMessageValue
            }

            const stateCopy = {...state};
            stateCopy.messages = [...state.messages];

            stateCopy.messages.push(newMessage);
            stateCopy.newMessageValue = '';
            return stateCopy;*/

            return {
                ...state,
                newMessageValue: '',
                messages: [...state.messages, {id: '4', userName: 'Me', message: action.newMessageValue}]
            }
        }
        /*case 'CHANGE-NEW-MESSAGE-VALUE': {
            /!*const stateCopy = {...state};

            stateCopy.newMessageValue = action.newMessageText;
            return stateCopy;*!/
            return {
                ...state,
                newMessageValue: action.newMessageText
            }
        }*/
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

/*export const changeNewMessageActionCreator = (data) => {
    return {
        type: CHANGE_NEW_MESSAGE_VALUE,
        newMessageText: data
    }
}*/

export default messagesReducer;