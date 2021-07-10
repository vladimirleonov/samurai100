const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_VALUE = 'CHANGE-NEW-POST-VALUE';

const initialState = {
    postData: [
        { id: "1", text: 'fsreggx fgh fhgfhf', likeCount: '12'},
        { id: "2", text: 'gjgjgh fhg', likeCount: '9'},
        { id: "3", text: 'qwerty', likeCount: '11'}
    ],
    newPostValue: ''
}

const profileReducer = (state = initialState, action) => {

    const stateCopy = {...state};

    switch (action.type) {
        case 'ADD-POST': {
            /*const newPost = {
                    id: "4",
                    text: state.newPostValue,
                    likeCount: '4'
            }
            const stateCopy = {...state};
            stateCopy.postData = [...state.postData];

            stateCopy.postData.push(newPost);
            stateCopy.newPostValue = '';
            return stateCopy;*/
            return {
                ...state,
                newPostValue: '',
                postData: [...state.postData, {id: '4', text: state.newPostValue, likeCount: '4'}]
            }
        }
        case 'CHANGE-NEW-POST-VALUE': {
            /*const stateCopy = {...state};

            stateCopy.newPostValue = action.newPostText;
            return stateCopy;*/

            return {
                ...state,
                newPostValue: action.newPostText
            }
        }
        default: {
            return state;
        }
    }
}

export const addPostActionCreator = (data) => {
    return {
        type: ADD_POST
    }
}

export const changeNewPostValueActionCreator = (data) => {
    return {
        type: CHANGE_NEW_POST_VALUE,
        newPostText: data
    }
}

export default profileReducer;