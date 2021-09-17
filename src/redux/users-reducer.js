import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const IS_LOADING = 'IS-LOADING';
const TOGGLE_BTN_CONDITION = 'TOGGLE-BTN-CONDITION';

const initialState = {
    users: [
        /*{id: 1, userName: 'Dmitry K.', subscription: false, status: "I'm looking for a job", location: {country: 'Warsaw', city: 'Poland'}},
        {id: 2, userName: 'Svetlana D.', subscription: false, status: "I'm ready to help you", location: {country: 'Russia', city: 'Moscow'}},
        {id: 3, userName: 'Kiril D.', subscription: false, status: "I like football", location: {country: 'Kiev', city: 'Ukraine'}}*/
    ],
    totalUsersCount: 21,
    pageSize: 5,
    currentPage: 1,
    isLoading: false,
    disabledBtnsArr: []
}

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
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
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
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
        case TOGGLE_BTN_CONDITION: {
            if(state.disabledBtnsArr.some(item => item === action.userId)) {
                return {
                    ...state,
                    disabledBtnsArr: [...state.disabledBtnsArr.filter(item => item !== action.userId)]
                }
            }
            else {
                return {
                    ...state,
                    disabledBtnsArr: [...state.disabledBtnsArr, action.userId]
                }
            }
        }
        default: {
            return state;
        }
    }
}

export const followActionCreator = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}

export const unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export const setCurrentPageActionCreator = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: page
    }
}

export const setTotalUsersCountActionCreator = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount
    }
}

export const isLoadingActionCreator = (value) => {
    return {
        type: IS_LOADING,
        isLoading:value
    }
}

export const toggleBtnConditionActionCreator = (userId) => {
    return {
        type: TOGGLE_BTN_CONDITION,
        userId
    }
}

export const requestUsersWithSetTUCThunkCreator = (pageSize, currentPage) => {
    return (dispatch) => {
        usersAPI.getUsers(pageSize, currentPage)//getUsers
            .then((data) => {
                dispatch(isLoadingActionCreator(false));
                dispatch(setUsersActionCreator(data.items));
                dispatch(setTotalUsersCountActionCreator(data.totalCount));
            });
    }
}

export const requestUsersThunkCreator = (pageSize, currentPage) => {
    return (dispatch) => {
        usersAPI.getUsers(pageSize, currentPage)//getUsers
            .then((data) => {
                dispatch(isLoadingActionCreator(false));
                dispatch(setUsersActionCreator(data.items));
            });
    }
}

export default usersReducer;