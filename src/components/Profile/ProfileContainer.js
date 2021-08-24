import React from 'react';

import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunkCreator, setUserProfileActionCreator} from "../../redux/profile-reducer";

import { withRouter, Redirect } from 'react-router-dom';

import {profileAPI} from "../../api/api";

class ProfileContainerAPI extends React.Component {

    componentDidMount() {
        debugger;

        const userId = this.props.match.params.userId;

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
        debugger;
        return (
            this.props.isActive ? <Profile userProfile={this.props.userProfile} /> : <Redirect to='/login'/>
        )
    }
}

const mapStateToProps = (state) => {
    debugger;
    return {
        userProfile: state.profilePage.userProfile,
        isAuth: state.auth.isAuth
    }
}

/*const mapDispatchToProps = (dispatch) => {
    debugger;
    return {
        setUserProfile (profile) {
            dispatch(setUserProfileActionCreator(profile))
        },
        getUserProfileThunkCreator
    }
}*/

const ProfileContainerWithUrlData = withRouter(ProfileContainerAPI);

const ProfileContainer = connect(mapStateToProps,
    {
        setUserProfile: setUserProfileActionCreator,
        getUserProfileThunkCreator
    }
)(ProfileContainerWithUrlData);

export default ProfileContainer;