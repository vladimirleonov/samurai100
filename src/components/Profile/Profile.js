import React from 'react';

import s from './Profile.module.css';

import BigImg from './BigImg/BigImg';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return(
        <div className={s.profile}>
            <BigImg/>
            <ProfileInfo/>
            <MyPostsContainer
                postData={props.profileState.postData}
                newPostValue={props.profileState.newPostValue}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;