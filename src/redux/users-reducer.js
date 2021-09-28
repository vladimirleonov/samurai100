import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT';
const IS_LOADING = 'users/IS-LOADING';
const TOGGLE_BTN_CONDITION = 'users/TOGGLE-BTN-CONDITION';

const initialState = {
    users: [],
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
                users: updateObjectInArray(state.users, action.userId, {followed: true})
                /*state.users.map((u) => {
                    if(u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    } else {
                        return u;
                    }
                })*/
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, {followed: false})
                /*state.users.map((u)=>{
                    if(u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    else {
                        return u;
                    }
                })*/
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
    debugger;
    return {
        type: TOGGLE_BTN_CONDITION,
        userId
    }
}

export const requestUsersWithSetTUCThunkCreator = (pageSize, currentPage) => {
    return async (dispatch) => {
        const data = await usersAPI.getUsers(pageSize, currentPage)//getUsers

        dispatch(isLoadingActionCreator(false));
        dispatch(setUsersActionCreator(data.items));
        dispatch(setTotalUsersCountActionCreator(data.totalCount));
    }
}

export const requestUsersThunkCreator = (pageSize, currentPage) => {
    return async (dispatch) => {
        const data = await usersAPI.getUsers(pageSize, currentPage)//getUsers

        dispatch(isLoadingActionCreator(false));
        dispatch(setUsersActionCreator(data.items));
    }
}

const followUnfollowFlow = async (dispatch, apiMethod, actionCreator, id) => {
    dispatch(toggleBtnConditionActionCreator(id));
    let data = await apiMethod(id);
    if(data.resultCode === 0) { //follow happened
        dispatch(actionCreator(id));
    }
    dispatch(toggleBtnConditionActionCreator(id));
}


export const followThunkCreator = (id) => {

    return async (dispatch) => {

        followUnfollowFlow(dispatch, usersAPI.follow.bind(usersAPI), followActionCreator, id);

        /*dispatch(toggleBtnConditionActionCreator(id));
        const data = await usersAPI.follow(id)
        if(data.resultCode === 0) { //follow happened
            dispatch(toggleBtnConditionActionCreator(id));
            dispatch(followActionCreator(id));
        }*/

    }
}

export const unfollowThunkCreator = (id) => {

    return async (dispatch) => {

        followUnfollowFlow(dispatch, usersAPI.unfollow.bind(usersAPI), unfollowActionCreator, id);

        /*dispatch(toggleBtnConditionActionCreator(id));
        const data = await usersAPI.unfollow(id)
        if(data.resultCode === 0) { //unfollow happened
            dispatch(toggleBtnConditionActionCreator(id));
            dispatch(unfollowActionCreator(id));
        }*/

    }
}

export default usersReducer;