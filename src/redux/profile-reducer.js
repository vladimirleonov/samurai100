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
            state.profilePage.newPostValue = action.data;
            break;
        }
    }
    return state;
}

export default profileReducer;