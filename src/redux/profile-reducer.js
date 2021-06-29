const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_VALUE = 'CHANGE-NEW-POST-VALUE';

const profileReducer = (state, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            state.profilePage.postData.push(
                {
                    id: "4",
                    text: state.profilePage.newPostValue,
                    likeCount: '4'
                }
            )
            state.profilePage.newPostValue = '';
            break;
        }
        case 'CHANGE-NEW-POST-VALUE': {
            state.profilePage.newPostValue = action.newPostText;
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