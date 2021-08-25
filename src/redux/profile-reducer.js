import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_VALUE = 'CHANGE-NEW-POST-VALUE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
    postData: [
        { id: "1", text: 'fsreggx fgh fhgfhf', likeCount: '12'},
        { id: "2", text: 'gjgjgh fhg', likeCount: '9'},
        { id: "3", text: 'qwerty', likeCount: '11'}
    ],
    newPostValue: '',
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
    }
}

const profileReducer = (state = initialState, action) => {

    const stateCopy = {...state};

    debugger;

    switch (action.type) {
        case ADD_POST: {
            debugger;
            /*const newPost = {
                    id: "4",
                    text: state.newPostValue,
                    likeCount: '4'
            }
            const stateCopy = {...state};
            stateCopy.postData = [...state.postData];

            stateCopy.postData.push(newPost);
            stateCopy.newPostValue = '';
            return stateCopy;*/
            return {
                ...state,
                newPostValue: '',
                postData: [...state.postData, {id: '4', text: state.newPostValue, likeCount: '4'}]
            }
        }
        case CHANGE_NEW_POST_VALUE: {
            debugger;
            /*const stateCopy = {...state};

            stateCopy.newPostValue = action.newPostText;
            return stateCopy;*/

            return {
                ...state,
                newPostValue: action.newPostText
            }
        }
        case SET_USER_PROFILE: {
            debugger;
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
        default: {
            debugger;
            return state;
        }
    }
}

export const addPostActionCreator = (data) => {
    return {
        type: ADD_POST
    }
}

export const changeNewPostValueActionCreator = (data) => {
    return {
        type: CHANGE_NEW_POST_VALUE,
        newPostText: data
    }
}

export const setUserProfileActionCreator = (profile) => {
    debugger;
    return {
        type: SET_USER_PROFILE,
        userProfile: profile
    }
}

export const getUserProfileThunkCreator = (userId) => (dispatch) => {
        profileAPI.getUserProfile(userId)
            .then((data) => {
                debugger;
                dispatch(setUserProfileActionCreator(data));
                debugger;
            })
}

export default profileReducer;