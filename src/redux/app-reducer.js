import {getAuthDataThunkCreator} from "./auth-reducer";

const SET_INITIALIZED = 'app/SET-INITIALIZED';

const initialState = {
    isInitialized: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED : {
            return {
                ...state,
                isInitialized: true
            }
        }
        default: {
            return state
        }
    }
}

export default appReducer;

const setInitializedActionCreator = () => {
    return {
        type: SET_INITIALIZED
    }
}

export const setInitializedThunkCreator = () => {
    return async (dispatch) => {
        const promise = await dispatch(getAuthDataThunkCreator());
        Promise.all([promise])
            .then(() => {
                dispatch(setInitializedActionCreator())
            })
    }
}