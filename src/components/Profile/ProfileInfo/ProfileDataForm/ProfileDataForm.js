import React from 'react';
import {Field, reduxForm, submit} from "redux-form";
import s from './ProfileDataFrom.module.css';

const renderField = (
    {
        input,
        placeholder,
        type,
        meta: { touched, error } ,
        className
    }) => (
    <div className={s.field}>
        <input {...input} placeholder={placeholder} type={type} className={className} />
        {touched && error && <span>{error}</span>}
    </div>
)
const renderFieldWithLabel = (
    {
        input,
        placeholder,
        type,
        label,
        note,
        meta: { touched, error } ,
        className
    }) => (
    note === 'before' ?
        <div className={s.labelInputWrapper}>
            <label className={s.label_before}>{label}</label>
            <input {...input} placeholder={placeholder} type={type} className={className} />
            {touched && error && <span>{error}</span>}
        </div> :
        <div className={s.lbl__wrapper}>
            <input {...input} placeholder={placeholder} type={type} className={className} />
            <label className={s.label}>{label}</label>
            {touched && error && <span>{error}</span>}
        </div>
)


/*aboutMe: null
contacts: {facebook: null, website: null, vk: null, twitter: null, instagram: null, youtube: null, github: null,…}
fullName: "Urij"
lookingForAJob: false
lookingForAJobDescription: null
photos: {small: "https://social-network.samuraijs.com/activecontent/images/users/18418/user-small.jpg?v=9",…}
userId: 18418*/


const ProfileDataFrom = (props) => {
    const { error, handleSubmit, pristine, reset, submitting } = props;
    return (
        <form className={s.profile_data_form} onSubmit={handleSubmit} onfocus={true}>
            <div className={s.common__error}>
                {props.error}
            </div>
            <Field name='fullName' type='text' component={renderFieldWithLabel} label="full name" className={s.input} note={'before'}/>
            <Field name='aboutMe' type='text' component={renderFieldWithLabel} label="about me" className={s.input} note={'before'}/>
            <Field name='lookingForAJob' type='checkbox' component={renderFieldWithLabel} label="Looking for a job" className={s.checkbox}/>
            <Field name='lookingForAJobDescription' type='text' component={renderFieldWithLabel} label="looking for a job description" className={s.input} note={'before'}/>

            <Field name="contacts.facebook" type="text" component={renderField} placeholder="facebook" className={s.input} />
            <Field name="contacts.github" type="text" component={renderField} placeholder="github" className={s.input} />
            <Field name="contacts.instagram" type="text" component={renderField} placeholder="instagram" className={s.input} />
            <Field name="contacts.mainLink" type="text" component={renderField} placeholder="mainLink" className={s.input} />
            <Field name="contacts.twitter" type="text" component={renderField} placeholder="twitter" className={s.input} />
            <Field name="contacts.vk" type="text" component={renderField} placeholder="vk" className={s.input} />
            <Field name="contacts.website" type="text" component={renderField} placeholder="website" className={s.input} />
            <Field name="contacts.youtube" type="text" component={renderField} placeholder="youtube" className={s.input} />

            <div className={s.btns__wrapper}>
                <button className={s.save__btn} type='submit'>
                    Save
                </button>
                <button
                    onClick={reset}
                    disabled={pristine || submitting}
                    className={s.clear__btn}
                    type='submit'
                >
                    Clear
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'profileDataFrom'
})(ProfileDataFrom);