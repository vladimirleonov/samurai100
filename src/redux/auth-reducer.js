import {authAPI} from "../api/api";

import { stopSubmit } from "redux-form";

const SET_USER_AUTH_DATA = 'SET-USER-AUTH-DATA';
const LOGOUT = 'LOGOUT';

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH_DATA: {
            return {
                ...state,
                id: action.id,
                email: action.email,
                login: action.login,
                isAuth: action.isAuth
            }
        }
        case LOGOUT: {
            return {
                ...state,
                isAuth: false
            }
        }
        default: {
            return state;
        }
    }
}

export const setUserAuthDataActionCreator = (id, login, email, isAuth = false) => {
    return {
        type: SET_USER_AUTH_DATA,
        id,
        login,
        email,
        isAuth
    }
}

export const getAuthDataThunkCreator = () => {
    return (dispatch) => {
        return authAPI.getAuthData()
            .then((data) => {
                if(data.resultCode === 0) {
                    const {id, login, email} = data.data;
                    dispatch(setUserAuthDataActionCreator(id, login, email, true));
                }
            })
    }
}

export const loginThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then((data) => {
                debugger;
                if(data.resultCode === 0) {
                    debugger;
                    alert('loged in');
                    dispatch(getAuthDataThunkCreator())
                } else {
                    dispatch(stopSubmit('login', {_error: data.messages[0]}));
                }
            })
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        debugger;
        authAPI.logout()
            .then((data) => {
                debugger;
                if(data.resultCode === 0) {
                    alert('loged out');
                    dispatch(setUserAuthDataActionCreator(null, null, null, false));
                }
            })
    }
}

export default authReducer;