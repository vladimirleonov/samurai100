import React from "react";
import s from "./LoginForm.module.css";

import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
    debugger;

    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit} className={s.login_form}>
            <div className={s.field}>
                <Field name='loginField' component='input' className={s.input} type='text' placeholder={'login'}/>
            </div>
            <div className={s.field}>
                <Field name='passwordField' component='input' className={s.input} type='text' placeholder={'password'}/>
            </div>
            {/*<div>
                    <label className={s.label}>Remember me</label>
                </div>
                <div>*/}
            <div className={s.btnlbl__wrapper}>
                <div className={s.lbl__wrapper}>
                    <Field name='rememberMeField' component='input' className={s.checkbox} type='checkbox'/>
                    <label className={s.label}>Remember me</label>
                </div>
                <button className={s.btn} type='submit'>
                    Log in
                </button>
            </div>
        </form>
    )
}



export default reduxForm({
    form: 'login'
})(LoginForm);