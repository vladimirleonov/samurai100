import React, {useState} from 'react';
import s from "./ProfileInfo.module.css";
import ava from "./ava.png";

import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import Contact from "./ProfileData/Contact/Contact";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";

const ProfileInfo = (props) => {

    const [editMode, changeEditMode] = useState(false);

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            props.uploadProfilePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={s.info__wrapper}>
            <div className={s.ava}>
                <img src={props.userProfile.photos.large ? props.userProfile.photos.large : ava} alt='avatar'/>
                {props.isOwner && <input className={s.file_input} type="file" onChange={onMainPhotoSelected} />}
            </div>
            <div className={s.info}>
                {
                    props.userProfile.fullName ?
                        <div className={s.name}>{props.userProfile.fullName}</div>
                        : null
                }

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                {props.isOwner && !editMode && <button onClick={() => {changeEditMode(true)}}>set profile data</button>}
                {!editMode ?
                    <ProfileData userProfile={props.userProfile}/>
                    : <ProfileDataForm changeEditMode={changeEditMode}/>
                }
            </div>
        </div>
    )
}

export default ProfileInfo;