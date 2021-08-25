import React from 'react';

import s from './Profile.module.css';

import BigImg from './BigImg/BigImg';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    debugger;
    return(
        <div className={s.profile}>
            {/*<BigImg/>*/}
            <ProfileInfo userProfile={props.userProfile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;