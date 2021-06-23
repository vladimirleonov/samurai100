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
        debugger;
        switch (action.type) {
            case 'ADD-POST': {
                this._state.profilePage.postData.push(
                    {
                        id: "4",
                        text: this._state.profilePage.newPostValue,
                        likeCount: '4'
                    }
                )
                this._state.profilePage.newPostValue = '';
                this._rerenderApp(store);
            }
            case 'CHANGE-NEW-POST-VALUE': {
                this._state.profilePage.newPostValue = action.data;
                this._rerenderApp(store);
            }
            case 'ADD-MESSAGE': {
                /*debugger;*/
                this._state.messagesPage.messages.push(
                    {
                        id: "4",
                        userName: "Me",
                        message: this._state.messagesPage.newMessageValue
                    }
                )
                this._state.messagesPage.newMessageValue = '';
                this._rerenderApp(store);
            }
            case 'CHANGE-NEW-MESSAGE-VALUE': {
                this._state.messagesPage.newMessageValue = action.data;
                this._rerenderApp(store);
            }
        }
    },
/*    addPost() {
        this._state.profilePage.postData.push(
            {
                id: "4",
                text: this._state.profilePage.newPostValue,
                likeCount: '4'
            }
        )
        this._state.profilePage.newPostValue = '';
        this._rerenderApp(store);
    },
    changeNewPostValue(data) {
        this._state.profilePage.newPostValue = data;
        this._rerenderApp(store);
    },
    addMessage() {
        debugger;
        this._state.messagesPage.messages.push(
            {
                id: "4",
                userName: "Me",
                message: this._state.messagesPage.newMessageValue
            }
        )
        this._state.messagesPage.newMessageValue = '';
        this._rerenderApp(store);
    },
    changeNewMessageValue(data) {
        this._state.messagesPage.newMessageValue = data;
        this._rerenderApp(store);
    },*/
    _rerenderApp() {},
    observer(subscriber) {
        this._rerenderApp = subscriber;
    }
}

export default store;


/*
const state = {
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
}

export const addPost = () => {
    state.profilePage.postData.push(
        {
            id: "4",
            text: state.profilePage.newPostValue,
            likeCount: '4'
        }
    )
    state.profilePage.newPostValue = '';
    rerenderApp(state);
}

export const changeNewPostValue = (data) => {
    state.profilePage.newPostValue = data;
    rerenderApp(state);
}

export const addMessage = () => {
    state.messagesPage.messages.push(
        {
            id: "4",
            userName: "Me",
            message: "qweqwe wqe"
        }
    )
    state.messagesPage.newMessageValue = '';
    rerenderApp(state);
}

export const onChangeNewMessageValue = (data) => {
    state.messagesPage.newMessageValue = data;
    rerenderApp(state);
}


let rerenderApp = () => {}

export const observer = (subscriber) => {
    rerenderApp = subscriber;
}

export default state;*/
