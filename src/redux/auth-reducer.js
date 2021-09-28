import {authAPI} from "../api/api";

import { stopSubmit } from "redux-form";

const SET_USER_AUTH_DATA = 'auth/SET-USER-AUTH-DATA';
const LOGOUT = 'auth/LOGOUT';

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
    return async (dispatch) => {
/*        return authAPI.getAuthData()
            .then((data) => {
                if(data.resultCode === 0) {
                    const {id, login, email} = data.data;
                    dispatch(setUserAuthDataActionCreator(id, login, email, true));
                }
            })*/
        const data = await authAPI.getAuthData();

        if(data.resultCode === 0) {
            const {id, login, email} = data.data;
            dispatch(setUserAuthDataActionCreator(id, login, email, true));
        }
    }
}

export const loginThunkCreator = (email, password, rememberMe) => {
    return async (dispatch) => {
        const data = await authAPI.login(email, password, rememberMe);

        if(data.resultCode === 0) {
            alert('loged in');
            dispatch(getAuthDataThunkCreator())
        } else {
            dispatch(stopSubmit('login', {_error: data.messages[0]}));
        }
    }
}

export const logoutThunkCreator = () => {
    return async (dispatch) => {
        const data = await authAPI.logout();

        if(data.resultCode === 0) {
            alert('loged out');
            dispatch(setUserAuthDataActionCreator(null, null, null, false));
        }
    }
}

export default authReducer;