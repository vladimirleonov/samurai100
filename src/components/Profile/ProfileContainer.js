import React from 'react';

import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    setUserProfileActionCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator
} from "../../redux/profile-reducer";

import { withRouter, Redirect } from 'react-router-dom';

import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainerAPI extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 18418;
        }

        this.props.getUserProfileThunkCreator(userId);

        this.props.getStatusThunkCreator(userId);
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
            <Profile userProfile={this.props.userProfile} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status
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
    WithAuthRedirect,
    withRouter,
    connect(mapStateToProps,
        {
            setUserProfile: setUserProfileActionCreator,
            getUserProfileThunkCreator,
            getStatusThunkCreator,
            updateStatus: updateStatusThunkCreator
        })
)(ProfileContainerAPI);

export default ProfileContainer;