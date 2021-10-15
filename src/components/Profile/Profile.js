import React from 'react';

import s from './Profile.module.css';

import BigImg from './BigImg/BigImg';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return(
        <div className={s.profile}>
            {/*<BigImg/>*/}
            <ProfileInfo userProfile={props.userProfile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         uploadProfilePhoto={props.uploadProfilePhoto}
                         saveProfileData={props.saveProfileData}
                         isErrorProfileData={props.isErrorProfileData}/>
            <MyPosts postsData={props.postsData} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;