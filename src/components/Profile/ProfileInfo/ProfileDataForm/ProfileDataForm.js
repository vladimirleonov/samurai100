import React from 'react';
import {Field, reduxForm, submit} from "redux-form";
import s from './ProfileDataFrom.module.css';

const renderField = (
    {
        input,
        label,
        type,
        meta: { touched, error } ,
        className
    }) => (
    <div className={s.field}>
        <input {...input} placeholder={label} type={type} className={className} />
        {touched && error && <span>{error}</span>}
    </div>
)

const ProfileDataFrom = (props) => {
    const { error, handleSubmit, pristine, reset, submitting } = props;
    return (
        <form className={s.profile_data_form} onSubmit={handleSubmit(submit)} onBlur={() => {props.changeEditMode(false)}}>
            <Field name="facebook" type="text" component={renderField} label="facebook" className={s.input} />
            <Field name="github" type="text" component={renderField} label="github" className={s.input} />
            <Field name="instagram" type="text" component={renderField} label="instagram" className={s.input} />
            <Field name="mainLink" type="text" component={renderField} label="mainLink" className={s.input} />
            <Field name="twitter" type="text" component={renderField} label="twitter" className={s.input} />
            <Field name="vk" type="text" component={renderField} label="vk" className={s.input} />
            <Field name="website" type="text" component={renderField} label="website" className={s.input} />
            <Field name="youtube" type="text" component={renderField} label="youtube" className={s.input} />
        </form>
    )
}

export default reduxForm({
    form: 'profileDataFrom'
})(ProfileDataFrom);