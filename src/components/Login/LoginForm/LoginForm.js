import React from "react";
import s from "./LoginForm.module.css";

import { Field, reduxForm } from "redux-form";

/*const validate = values => {
    const errors = {}
    if(!values.loginField) {
        errors.loginField = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.loginField)) {
        errors.loginField = 'Invalid email address'
    }

    if(!values.passwordField) {
        errors.passwordField = 'Required'
    } else if (values.passwordField.length < 4) {
        errors.passwordField = 'Must be 4 characters or more'
    }
    return errors;
}*/

/*    const warn = values => {
        const warnings = {}
        if() {

        }
        return warnings;
    }*/

const required = (value) => (value || typeof value === 'number' ? undefined : 'Required');
const minLength = (min) => (value) => {
        return value && value.length < min ? `Munt be ${min} characters or more` : undefined
};
const minLength4 = minLength(4);
const email = (value) => (
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
);
const renderField = ({
                         input,
                         placeholder,
                         type,
                         className,
                         meta: { touched, error, warning }
                     }) => (
    <div className={s.field}>
        <input {...input} placeholder={placeholder} type={type} className={className} />
        {
            touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))
        }
    </div>
)

const LoginForm = (props) => {

    const { handleSubmit, pristine, reset, submitting, captchaUrl } = props;

    return (
        <form onSubmit={handleSubmit} className={s.login_form}>
            <Field
                name='loginField'
                component={renderField}
                className={s.input}
                type='email'
                placeholder={'email'}
                validate={[required, email]}
            />
            <Field
                name='passwordField'
                component={renderField}
                className={s.input}
                type='password'
                placeholder={'password'}
                validate={[required, minLength4]}
            />
            {/*<div>
                    <label className={s.label}>Remember me</label>
                </div>
                <div>*/}
            <div className={s.lbl__wrapper}>
                <div className={s.lbl__wrapper}>
                    <Field name='rememberMeField' component='input' className={s.checkbox} type='checkbox'/>
                    <label className={s.label}>Remember me</label>
                </div>
            </div>
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && <Field name='captchaField' component={renderField} className={s.input} type='text' placeholder='captcha' validate={[required]}/>}
            <div className={s.common__error}>
                {props.error}
            </div>
            <div className={s.btns__wrapper}>
                <button className={s.login__btn} type='submit'>
                    Log in
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
    form: 'login',
})(LoginForm);