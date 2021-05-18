import React from 'react';

import s from './Profile.module.css';

import BigImg from './BigImg/BigImg';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return(
        <div className={s.profile}>
            <BigImg/>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile;