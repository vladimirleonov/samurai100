import React from 'react';

import Profile from "./Profile";
import * as axios from 'axios';
import {connect} from "react-redux";
import {setUsersProfileActionCreator} from "../../redux/profile-reducer";

import { withRouter } from 'react-router-dom';

import {profileAPI} from "../../api/api";

class ProfileContainerAPI extends React.Component {

    componentDidMount() {
        debugger;
        profileAPI.getUserProfile(this.props.match.params.userId)
            .then((data) => {
                debugger;
                this.props.setUserProfile(data);
                debugger;
            })
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
            <Profile userProfile={this.props.userProfile} />
        )
    }
}

const mapStateToProps = (state) => {
    debugger;
    return {
        userProfile: state.profilePage.userProfile
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger;
    return {
        setUserProfile (profile) {
            dispatch(setUsersProfileActionCreator(profile))
        }
    }
}

const ProfileContainerWithUrlData = withRouter(ProfileContainerAPI);

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerWithUrlData);

export default ProfileContainer;