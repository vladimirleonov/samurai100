import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_VALUE = 'CHANGE-NEW-POST-VALUE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';

const initialState = {
    postsData: [
        { id: "1", text: 'fsreggx fgh fhgfhf', likeCount: '12'},
        { id: "2", text: 'gjgjgh fhg', likeCount: '9'},
        { id: "3", text: 'qwerty', likeCount: '11'}
    ],
   /* newPostValue: '',*/
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
    status: ''
}

const profileReducer = (state = initialState, action) => {

    const stateCopy = {...state};

    switch (action.type) {
        case ADD_POST: {
            /*const newPost = {
                    id: "4",
                    text: state.newPostValue,
                    likeCount: '4'
            }
            const stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];

            stateCopy.postsData.push(newPost);
            stateCopy.newPostValue = '';
            return stateCopy;*/
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
        /*case CHANGE_NEW_POST_VALUE: {
            /!*const stateCopy = {...state};

            stateCopy.newPostValue = action.newPostText;
            return stateCopy;*!/

            return {
                ...state,
                newPostValue: action.newPostText
            }
        }*/
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
        default: {
            return state;
        }
    }
}

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

/*export const changeNewPostValueActionCreator = (data) => {
    return {
        type: CHANGE_NEW_POST_VALUE,
        newPostText: data
    }
}*/

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

/*thunks*/

export const getUserProfileThunkCreator = (userId) => (dispatch) => {
        profileAPI.getUserProfile(userId)
            .then((data) => {
                dispatch(setUserProfileActionCreator(data));
            })
}

export const getStatusThunkCreator = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then((data) => {
            dispatch(setStatusActionCreator(data));
        })

}

export const updateStatusThunkCreator = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then((data) => {
            if(data.resultCode === 0) {
                dispatch(setStatusActionCreator(status));
                console.log(initialState.status);
            }
        })
}

export default profileReducer;