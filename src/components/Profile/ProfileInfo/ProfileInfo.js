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

    const submit = (profileData) => {

        console.log(profileData);
        debugger;
        props.saveProfileData(profileData).then(() => {
            /*if(props.isErrorProfileData === false) {*/
                debugger;
                console.log('made');
                changeEditMode(false);
            /*}*/
        })
        debugger;
    }

    return (
        <div className={s.info__wrapper}>
            {/*ava*/}
            <div className={s.ava}>
                <img src={props.userProfile.photos.large ? props.userProfile.photos.large : ava} alt='avatar'/>
                {props.isOwner &&
                    <label className={s.file_label}>
                        <input className={s.file_input} type="file" onChange={onMainPhotoSelected}/>
                        <span className={s.line1}></span>
                        <span className={s.line2}></span>
                    </label>
                }
            </div>
            {/*info*/}
            <div className={s.info}>
                {
                    props.userProfile.fullName ?
                        <div className={s.name}>{props.userProfile.fullName}</div>
                        : null
                }

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                {props.isOwner && !editMode && <button className={s.edit_btn} onClick={() => {changeEditMode(true)}}>edit</button>}
                {!editMode ?
                    <ProfileData userProfile={props.userProfile}/>
                    : <ProfileDataForm changeEditMode={changeEditMode} onSubmit={submit} initialValues={props.userProfile} userProfile={props.userProfile}/>
                }
            </div>
        </div>
    )
}

export default ProfileInfo;