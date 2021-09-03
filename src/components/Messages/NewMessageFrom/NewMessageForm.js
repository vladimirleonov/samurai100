import React from 'react';

import s from './NewMessageFrom.module.css';

import { Field, reduxForm } from 'redux-form';

const NewMessageForm = (props) => {

    const {handleSubmit, pristine, submitting} = props;

    return (
        <form className={s.newMessageForm} onSubmit={handleSubmit}>
            <Field
                className={s.newMessageTextarea}
                component="input"
                name="newMessageTextarea"
                type="text"
            />
            <button
                disabled={pristine || submitting}
                className={s.submitBtn}
                type='submit'
            >
                Send
            </button>
        </form>
    )
}

export default reduxForm({
    form: 'mew-message-form'
})(NewMessageForm);