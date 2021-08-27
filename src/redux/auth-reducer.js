import {authAPI} from "../api/api";

const SET_USER_AUTH_DATA = 'SET-USER-AUTH-DATA';

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
                login: action.login,
                email: action.email,
                isAuth: true
            }
        }
        default: {
            debugger;
            return state;
        }
    }
}

export const setUserAuthDataActionCreator = (id, login, email) => {
    return {
        type: SET_USER_AUTH_DATA,
        id,
        login,
        email
    }
}

export const getAuthDataThunkCreator = () => {
    return (dispatch) => {
        authAPI.getAuthData()
            .then((data) => {
                if(data.resultCode === 0) {
                    const {id, login, email} = data.data;
                    dispatch(setUserAuthDataActionCreator(id, login, email));
                }
            })
    }
}

export default authReducer;