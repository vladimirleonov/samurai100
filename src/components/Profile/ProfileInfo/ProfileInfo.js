import React from 'react';
import s from "./ProfileInfo.module.css";
import ava from "./ava.png";

const ProfileInfo = (props) => {
    debugger;
    return (
        <div className={s.info__wrapper}>
            <div className={s.ava}>
                <img src={props.profile.photos.large ? props.profile.photos.large : ava} alt='avatar'/>
            </div>
            <div className={s.info}>
                <div className={s.name}>{props.profile.fullName}</div>
                {
                    props.profile.contacts.aboutMe ?
                        <div className={`${s.text}`}>
                            <div className={s.title}>aboutMe</div>
                            <div className={s.descr}>{props.profile.contacts.aboutMe}</div>
                        </div>
                        : null
                }
                {
                    props.profile.contacts.facebook ?
                        <div className={`${s.text}`}>
                            <div className={s.title}>facebook</div>
                            <div className={s.descr}>{props.profile.contacts.facebook}</div>
                        </div>
                        : null
                }
                {
                    props.profile.contacts.website ?
                        <div className={`${s.text}`}>
                            <div className={s.title}>website</div>
                            <div className={s.descr}>{props.profile.contacts.website}</div>
                        </div>
                        : null
                }
                {
                    props.profile.contacts.vk ?
                        <div className={`${s.text}`}>
                            <div className={s.title}>vk</div>
                            <div className={s.descr}>{props.profile.contacts.vk}</div>
                        </div>
                        : null
                }
                {
                    props.profile.contacts.twitter ?
                        <div className={`${s.text}`}>
                            <div className={s.title}>twitter</div>
                            <div className={s.descr}>{props.profile.contacts.twitter}</div>
                        </div>
                        : null
                }
                {
                    props.profile.contacts.instagram ?
                        <div className={`${s.text}`}>
                            <div className={s.title}>instagram</div>
                            <div className={s.descr}>{props.profile.contacts.instagram}</div>
                        </div>
                        : null
                }
                {
                    props.profile.contacts.youtube ?
                        <div className={`${s.text}`}>
                            <div className={s.title}>youtube</div>
                            <div className={s.descr}>{props.profile.contacts.youtube}</div>
                        </div>
                        : null
                }
                {
                    props.profile.contacts.github ?
                        <div className={`${s.text}`}>
                            <div className={s.title}>github</div>
                            <div className={s.descr}>{props.profile.contacts.github}</div>
                        </div>
                        : null
                }
                {
                    props.profile.contacts.mainLink ?
                        <div className={`${s.text}`}>
                            <div className={s.title}>mainLink</div>
                            <div className={s.descr}>{props.profile.contacts.mainLink}</div>
                        </div>
                        : null
                }
                <div className={`${s.text}`}>
                    <div className={s.title}>lookingForAJob</div>
                    <div className={s.descr}>
                        {
                            props.profile.lookingForAJob ?
                                'Да' : 'Нет'
                        }
                    </div>
                </div>
                {
                    props.profile.lookingForAJobDescription ?
                        <div className={`${s.text}`}>
                            <div className={s.title}>lookingForAJobDescription</div>
                            <div className={s.descr}>{props.profile.lookingForAJobDescription}</div>
                        </div>
                        : null
                }
            </div>
        </div>
    )
}

export default ProfileInfo;