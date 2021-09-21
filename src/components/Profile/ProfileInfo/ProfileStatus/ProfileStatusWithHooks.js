import React, {useEffect, useState} from 'react';

import s from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {
    debugger;
    const [status, setStatus] = useState(props.status);
    const [editMode, changeEditMode] = useState(false);
    debugger;

    //if status was gotten after render profile with default status
    useEffect(() => {
        debugger;
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        changeEditMode(true);
    }

    const deactivateEditMode = () => {
        changeEditMode(false);
        debugger;
        props.updateStatus(status);
        debugger;
    }

    const onSetStatus = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={s.status__wrapper}>
            {
                editMode &&
                <span onBlur={deactivateEditMode} className={s.input__wrapper}>
                    <input onChange={onSetStatus} autoFocus={true} className={s.input} value={status}/>
                </span>
            }
            {
                !editMode &&
                <span onDoubleClick={activateEditMode} className={s.status} data-tip='double click to change'>
                    {props.status || 'No status'}
                </span>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;