import React from 'react';
import s from "./ProfileInfo.module.css";
import ava from "./ava.png";

import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

class ProfileInfo extends React.Component {
    render() {
        return (
            <div className={s.info__wrapper}>
                <div className={s.ava}>
                    <img src={this.props.userProfile.photos.large ? this.props.userProfile.photos.large : ava} alt='avatar'/>
                </div>
                <div className={s.info}>
                    {
                        this.props.userProfile.fullName ?
                            <div className={s.name}>{this.props.userProfile.fullName}</div>
                            : null
                    }

                    <ProfileStatus status={this.props.status} updateStatus={this.props.updateStatus}/>

                    {
                        this.props.userProfile.aboutMe ?
                            <div className={`${s.text}`}>
                                <div className={s.title}>aboutMe</div>
                                <div className={s.descr}>{this.props.userProfile.aboutMe}</div>
                            </div>
                            : null
                    }
                    {
                        this.props.userProfile.contacts.facebook ?
                            <div className={`${s.text}`}>
                                <div className={s.title}>facebook</div>
                                <div className={s.descr}>{this.props.userProfile.contacts.facebook}</div>
                            </div>
                            : null
                    }
                    {
                        this.props.userProfile.contacts.website ?
                            <div className={`${s.text}`}>
                                <div className={s.title}>website</div>
                                <div className={s.descr}>{this.props.userProfile.contacts.website}</div>
                            </div>
                            : null
                    }
                    {
                        this.props.userProfile.contacts.vk ?
                            <div className={`${s.text}`}>
                                <div className={s.title}>vk</div>
                                <div className={s.descr}>{this.props.userProfile.contacts.vk}</div>
                            </div>
                            : null
                    }
                    {
                        this.props.userProfile.contacts.twitter ?
                            <div className={`${s.text}`}>
                                <div className={s.title}>twitter</div>
                                <div className={s.descr}>{this.props.userProfile.contacts.twitter}</div>
                            </div>
                            : null
                    }
                    {
                        this.props.userProfile.contacts.instagram ?
                            <div className={`${s.text}`}>
                                <div className={s.title}>instagram</div>
                                <div className={s.descr}>{this.props.userProfile.contacts.instagram}</div>
                            </div>
                            : null
                    }
                    {
                        this.props.userProfile.contacts.youtube ?
                            <div className={`${s.text}`}>
                                <div className={s.title}>youtube</div>
                                <div className={s.descr}>{this.props.userProfile.contacts.youtube}</div>
                            </div>
                            : null
                    }
                    {
                        this.props.userProfile.contacts.github ?
                            <div className={`${s.text}`}>
                                <div className={s.title}>github</div>
                                <div className={s.descr}>{this.props.userProfile.contacts.github}</div>
                            </div>
                            : null
                    }
                    {
                        this.props.userProfile.contacts.mainLink ?
                            <div className={`${s.text}`}>
                                <div className={s.title}>mainLink</div>
                                <div className={s.descr}>{this.props.userProfile.contacts.mainLink}</div>
                            </div>
                            : null
                    }
                    <div className={`${s.text}`}>
                        <div className={s.title}>lookingForAJob</div>
                        <div className={s.descr}>
                            {
                                this.props.userProfile.lookingForAJob ?
                                    'Да' : 'Нет'
                            }
                        </div>
                    </div>
                    {
                        this.props.userProfile.lookingForAJobDescription ?
                            <div className={`${s.text}`}>
                                <div className={s.title}>lookingForAJobDescription</div>
                                <div className={s.descr}>{this.props.userProfile.lookingForAJobDescription}</div>
                            </div>
                            : null
                    }
                </div>
            </div>
        )
    }
}

export default ProfileInfo;