import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET-STATUS';
const DELETE_POST = 'profile/DELETE-POST';
const UPLOAD_PROFILE_PHOTO_SUCCESS = 'profile/UPLOAD-PROFILE-PHOTO-SUCCESS';
const SET_IS_ERROR_PROFILE_DATA = 'profile/SET-IS-ERROR-PROFILE-DATA'

const initialState = {
    postsData: [
        { id: "1", text: 'fsreggx fgh fhgfhf', likeCount: '12'},
        { id: "2", text: 'gjgjgh fhg', likeCount: '9'},
        { id: "3", text: 'qwerty', likeCount: '11'}
    ],
    userProfile: {
        fullName: null,
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        photos: {
            small: null,
            large: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
    },
    status: '',
    isErrorProfileData: false
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                postsData: [...state.postsData, {id: '4', text: action.newPostValue, likeCount: '4'}]
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                postsData: [
                    ...state.postsData.filter(item => item.id != action.postId)
                ]
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: {
                    ...state.userProfile,

                    fullName: action.userProfile.fullName,
                    aboutMe: action.userProfile.aboutMe,
                    lookingForAJob: action.userProfile.lookingForAJob,
                    lookingForAJobDescription: action.userProfile.lookingForAJobDescription,
                    contacts: {
                        ...state.userProfile.contacts,
                        facebook: action.userProfile.contacts.facebook,
                        website: action.userProfile.contacts.website,
                        vk: action.userProfile.contacts.vk,
                        twitter: action.userProfile.contacts.twitter,
                        instagram: action.userProfile.contacts.instagram,
                        youtube: action.userProfile.contacts.youtube,
                        github: action.userProfile.contacts.github,
                        mainLink: action.userProfile.contacts.mainLink
                    },
                    photos: {
                        ...state.userProfile.photos,
                        small: action.userProfile.photos.small,
                        large: action.userProfile.photos.large
                    }
                }
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case UPLOAD_PROFILE_PHOTO_SUCCESS: {
            return {
                ...state,
                userProfile: {
                    ...state.userProfile,
                    ...action.photos
                }
            }
        }
        case SET_IS_ERROR_PROFILE_DATA: {
            return {
                ...state,
                isErrorProfileData: action.value
            }
        }
        default: {
            return state;
        }
    }
}

/*actions*/

export const addPostActionCreator = (newPostValue) => {
    return {
        type: ADD_POST,
        newPostValue
    }
}

export const deletePostActionCreator = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
}

export const setUserProfileActionCreator = (profile) => {
    return {
        type: SET_USER_PROFILE,
        userProfile: profile
    }
}

export const setStatusActionCreator = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const uploadProfilePhotoSuccessActionCreator = (photos) => {
    debugger;
    return {
        type: UPLOAD_PROFILE_PHOTO_SUCCESS,
        photos
    }
}

export const setIsErrorProfileData = (value) => {
    debugger;
    return {
        type: SET_IS_ERROR_PROFILE_DATA,
        value
    }
}

/*thunks*/

export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
    const data = await profileAPI.getUserProfile(userId)
    debugger;
    dispatch(setUserProfileActionCreator(data));
}

export const getStatusThunkCreator = (userId) => async (dispatch) => {
    const data = await profileAPI.getStatus(userId)

    dispatch(setStatusActionCreator(data));
}

export const updateStatusThunkCreator = (status) => async (dispatch) => {
    const data = await profileAPI.updateStatus(status)
        if(data.resultCode === 0) {
            dispatch(setStatusActionCreator(status));
            console.log(initialState.status);
        }
}

export const uploadProfilePhotoThunkCreator = (file) => async (dispatch) => {
    const data = await profileAPI.uploadProfilePhoto(file);
    if(data.resultCode === 0) {
        dispatch(uploadProfilePhotoSuccessActionCreator(data.data));
    }
}

export const saveProfileDataThunkCreator = (profileData) => async (dispatch, getState) => {
    const data = await profileAPI.saveProfileData(profileData);
    if(data.resultCode === 0) {
        debugger;
        if(getState().profilePage.isErrorProfileData) {
            /*dispatch(setIsErrorProfileData(false));*/
        }
        debugger;
        dispatch(getUserProfileThunkCreator(getState().auth.id));
        console.log("OK OK OK");
        debugger;
    } else {
        /*dispatch(setIsErrorProfileData(true));*/
        debugger;
        dispatch(stopSubmit('profileDataFrom', {_error: data.messages[0]}));
        debugger;
    }
}

export default profileReducer;