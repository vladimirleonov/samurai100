import React from 'react';

import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    setUserProfileActionCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator,
    addPostActionCreator,
    uploadProfilePhotoThunkCreator,
    saveProfileDataThunkCreator
} from "../../redux/profile-reducer";

import { withRouter } from 'react-router-dom';

import {compose} from "redux";
import {getAuthorizedUserId, getIsAuth} from "../../redux/auth-selector";
import {getIsErrorProfileData, getPostsData, getStatus, getUserProfile} from "../../redux/profile-selector";

class ProfileContainerAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            debugger;
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push('/login');
            }
        }

        this.props.getStatusThunkCreator(userId);
        this.props.getUserProfileThunkCreator(userId);
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.userId != prevProps.match.params.userId) {
            let id = this.props.match.params.userId;
            if(!id) {
                debugger;
                id = this.props.authorizedUserId;
                if(!id) {
                    this.props.history.push('/login');
                }
            }

            this.props.getStatusThunkCreator(id);
            this.props.getUserProfileThunkCreator(id);
        }
    }

    componentWillUnmount() {
        this.props.setUserProfile({
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
        })
    }

    render () {
        return (
            <Profile userProfile={this.props.userProfile} status={this.props.status}
                     updateStatus={this.props.updateStatus} addPost={this.props.addPost}
                     postsData={this.props.postsData} isOwner={!this.props.match.params.userId}
                     uploadProfilePhoto = {this.props.uploadProfilePhoto}
                     saveProfileData = {this.props.saveProfileData}
                     isErrorProfileData = {this.props.isErrorProfileData}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: getUserProfile(state),
        postsData: getPostsData(state),
        status: getStatus(state),
        isAuth: getIsAuth(state),
        authorizedUserId: getAuthorizedUserId(state),
        isErrorProfileData: getIsErrorProfileData(state)
    }
}


const ProfileContainer = compose(
    withRouter,
    connect(mapStateToProps,
        {
            setUserProfile: setUserProfileActionCreator,
            addPost: addPostActionCreator,
            getUserProfileThunkCreator,
            getStatusThunkCreator,
            updateStatus: updateStatusThunkCreator,
            uploadProfilePhoto: uploadProfilePhotoThunkCreator,
            saveProfileData: saveProfileDataThunkCreator
        })
)(ProfileContainerAPI);

export default ProfileContainer;