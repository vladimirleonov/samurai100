const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_VALUE = 'CHANGE-NEW-POST-VALUE';

const defaultObj = {
    postData: [
        { id: "1", text: 'fsreggx fgh fhgfhf', likeCount: '12'},
        { id: "2", text: 'gjgjgh fhg', likeCount: '9'},
        { id: "3", text: 'qwerty', likeCount: '11'}
    ],
        newPostValue: ''
}

const profileReducer = (state=defaultObj, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            state.postData.push(
                {
                    id: "4",
                    text: state.newPostValue,
                    likeCount: '4'
                }
            )
            state.newPostValue = '';
            break;
        }
        case 'CHANGE-NEW-POST-VALUE': {
            state.newPostValue = action.newPostText;
            break;
        }
    }
    return state;
}

export const addPostActionCreator = (data) => {
    return {
        type: ADD_POST
    }
}

export const changeNewPostValue = (data) => {
    return {
        type: CHANGE_NEW_POST_VALUE,
        newPostText: data
    }
}

export default profileReducer;