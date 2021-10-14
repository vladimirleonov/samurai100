import React from 'react';
import s from "./ProfileData.module.css";
import Contact from "./Contact/Contact";

const ProfileData = (props) => {
    debugger;
    return (
        <>
            {
                props.userProfile.aboutMe ?
                    <div className={`${s.text}`}>
                        <div className={s.title}>aboutMe</div>
                        <div className={s.descr}>{props.userProfile.aboutMe}</div>
                    </div>
                    : null
            }

            <div className={`${s.text}`}>
                <div className={s.title}>lookingForAJob</div>
                <div className={s.descr}>{props.userProfile.lookingForAJob ? 'Да' : 'Нет'}</div>
            </div>

            {
                props.userProfile.lookingForAJobDescription ?
                    <div className={`${s.text}`}>
                        <div className={s.title}>lookingForAJobDescription</div>
                        <div className={s.descr}>{props.userProfile.lookingForAJobDescription}</div>
                    </div>
                    : null
            }
            {
                Object.keys(props.userProfile.contacts).map(key => { //Object.keys(this.props.userProfile.contacts) ->>>>>>>> ['facebook', 'website', 'vk']
                    return <Contact name={key} value={props.userProfile.contacts[key]}/> //take each key and get the value of this key
                })
            }
        </>
    )
}

export default ProfileData;