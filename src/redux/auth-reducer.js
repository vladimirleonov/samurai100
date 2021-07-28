const SET_USER_AUTH_DATA = 'SET-USER-AUTH-DATA';

const initialState = {
    id: null,
    login: null,
    email: null
}

const authReducer = (state= initialState, action) => {
    debugger;
    switch (action.type) {
        case SET_USER_AUTH_DATA: {
            return {
                ...state,
                id: action.id,
                login: action.login,
                email: action.email
            }
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

export default authReducer;