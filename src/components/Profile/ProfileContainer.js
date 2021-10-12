import React from 'react';

import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    setUserProfileActionCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator, addPostActionCreator, uploadProfilePhotoThunkCreator
} from "../../redux/profile-reducer";

import { withRouter } from 'react-router-dom';

import {compose} from "redux";
import {getAuthorizedUserId, getIsAuth} from "../../redux/auth-selector";
import {getPostsData, getStatus, getUserProfile} from "../../redux/profile-selector";

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
        authorizedUserId: getAuthorizedUserId(state)
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
            uploadProfilePhoto: uploadProfilePhotoThunkCreator
        })
)(ProfileContainerAPI);

export default ProfileContainer;