import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

const store = {
    _state: {
        profilePage: {
            postData: [
                { id: "1", text: 'fsreggx fgh fhgfhf', likeCount: '12'},
                { id: "2", text: 'gjgjgh fhg', likeCount: '9'},
                { id: "3", text: 'qwerty', likeCount: '11'}
            ],
            newPostValue: ''
        },
        messagesPage: {
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
        },
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        profileReducer(this._state, action);
        messagesReducer(this._state, action);
        this._rerenderApp(store);
    },

    _rerenderApp() {},
    observer(subscriber) {
        this._rerenderApp = subscriber;
    }
}

export default store;



