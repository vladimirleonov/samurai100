import React from 'react';

import Profile from "./Profile";
import * as axios from 'axios';
import {connect} from "react-redux";
import {setUsersProfileActionCreator} from "../../redux/profile-reducer";

class ProfileContainerAPI extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then((response) => {
                debugger;
                this.props.setUserProfile(response.data);
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

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerAPI);

export default ProfileContainer;