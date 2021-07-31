const SET_USER_AUTH_DATA = 'SET-USER-AUTH-DATA';

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case SET_USER_AUTH_DATA: {
            debugger;
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
    debugger;
    return {
        type: SET_USER_AUTH_DATA,
        id,
        login,
        email
    }
}

export default authReducer;