import React from 'react';
import s from "./ProfileInfo.module.css";
import ava from "./ava.png";

const ProfileInfo = () => {
    return (
        <div className={s.info__wrapper}>
            <div className={s.ava}>
                <img src={ava} alt='avatar'/>
            </div>
            <div className={s.info}>
                <div className={s.name}></div>
                <div className={`${s.text} ${s.birthday}`}><div className={s.title}>Birthday</div><div className={s.descr}>12 May</div></div>
                <div className={`${s.text} ${s.city}`}><div className={s.title}>City</div><div className={s.descr}>YYYYYY</div></div>
                <div className={`${s.text} ${s.education}`}><div className={s.title}>Education</div><div className={s.descr}>XXX</div></div>
                <div className={`${s.text} ${s.website}`}><div className={s.title}>Web Site</div><div className={s.descr}>qwerty</div></div>
            </div>
        </div>
    )
}

export default ProfileInfo;