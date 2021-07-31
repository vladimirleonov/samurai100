const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const IS_LOADING = 'IS_LOADING';

const initialState = {
    users: [
        /*{id: 1, userName: 'Dmitry K.', subscription: false, status: "I'm looking for a job", location: {country: 'Warsaw', city: 'Poland'}},
        {id: 2, userName: 'Svetlana D.', subscription: false, status: "I'm ready to help you", location: {country: 'Russia', city: 'Moscow'}},
        {id: 3, userName: 'Kiril D.', subscription: false, status: "I like football", location: {country: 'Kiev', city: 'Ukraine'}}*/
    ],
    totalUsersCount: 21,
    pageSize: 5,
    currentPage: 1,
    isLoading: false
}

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            debugger;
            return {
                ...state,
                users: state.users.map((u) => {
                    if(u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
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
                ...state,
                users: state.users.map((u)=>{
                    if(u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    else {
                        return u;
                    }
                })
            }
        }
        case SET_USERS: {
            debugger;
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            debugger;
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            debugger;
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }

        }
        case IS_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
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
        userId: userId
    }
}

export const setUsersActionCreator = (users) => {
    debugger;
    return {
        type: SET_USERS,
        users: users
    }
}

export const setCurrentPageActionCreator = (page) => {
    debugger;
    return {
        type: SET_CURRENT_PAGE,
        currentPage: page
    }
}

export const setTotalUsersCountActionCreator = (totalUsersCount) => {
    debugger;
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount
    }
}

export const isLoadingActionCreator = (value) => {
    debugger;
    return {
        type: IS_LOADING,
        isLoading:value
    }
}

export default usersReducer;