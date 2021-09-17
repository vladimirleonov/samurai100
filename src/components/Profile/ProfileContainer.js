import React from 'react';

import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    setUserProfileActionCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator, addPostActionCreator
} from "../../redux/profile-reducer";

import { withRouter, Redirect } from 'react-router-dom';

import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {getAuthorizedUserId, getIsAuth} from "../../redux/auth-selector";
import {getPostsData, getStatus, getUserProfile} from "../../redux/profile-selector";

class ProfileContainerAPI extends React.Component {
    debugger;
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
        /*profileAPI.getUserProfile(this.props.match.params.userId)
            .then((data) => {
                debugger;
                this.props.setUserProfile(data);
                debugger;
            })*/
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
                     postsData={this.props.postsData}
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

/*
const ProfileContainerWithUrlData = withRouter(ProfileContainerAPI);

const ProfileContainer = connect(mapStateToProps,
    {
        setUserProfile: setUserProfileActionCreator,
        getUserProfileThunkCreator
    }
)(ProfileContainerWithUrlData);

export default WithAuthRedirect(ProfileContainer);*/

const ProfileContainer = compose(
    /*WithAuthRedirect,*/
    withRouter,
    connect(mapStateToProps,
        {
            setUserProfile: setUserProfileActionCreator,
            addPost: addPostActionCreator,
            getUserProfileThunkCreator,
            getStatusThunkCreator,
            updateStatus: updateStatusThunkCreator
        })
)(ProfileContainerAPI);

export default ProfileContainer;