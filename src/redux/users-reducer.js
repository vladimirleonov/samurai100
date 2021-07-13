const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
    users: [
        {id: 1, userName: 'Dmitry K.', subscription: false, status: "I'm looking for a job", location: {country: 'Warsaw', city: 'Poland'}},
        {id: 2, userName: 'Svetlana D.', subscription: false, status: "I'm ready to help you", location: {country: 'Russia', city: 'Moscow'}},
        {id: 3, userName: 'Kiril D.', subscription: false, status: "I like football", location: {country: 'Kiev', city: 'Ukraine'}}
    ]
}

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            debugger;
            return {
                users: state.users.map((u) => {
                    if(u.id === action.userId) {
                        return {
                            ...u,
                            subscription: true
                        }
                    } else {
                        return u;
                    }
                })
            }
        }
        case UNFOLLOW: {
            debugger;
            return {
                users: state.users.map((u)=>{
                    if(u.id === action.userId) {
                        return {
                            ...u,
                            subscription: false
                        }
                    }
                    else {
                        return u;
                    }
                })
            }
        }
        default: {
            return state;
        }
    }
}

export const followActionCreator = (userId) => {
    debugger;
    return {
        type: FOLLOW,
        userId: userId
    }
}

export const unfollowActionCreator = (userId) => {
    debugger;
    return {
        type: UNFOLLOW,
        userId:userId
    }
}

export default usersReducer;