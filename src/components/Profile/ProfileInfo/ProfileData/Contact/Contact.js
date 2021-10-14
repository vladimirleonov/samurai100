import React from "react";
import s from './Contact.module.css'

const Contact = ({name, value}) => {
    return (
        <>
        {   value &&
            <div className={`${s.text}`}>
                <div className={s.title}>{name}</div>
                <div className={s.descr}>{value}</div>
            </div>
            }
        </>
    )
}

export default Contact;
