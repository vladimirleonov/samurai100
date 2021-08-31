import React from 'react';

import s from './NewMessageFrom.module.css';

import { Field, reduxForm } from 'redux-form';

const NewMessageForm = (props) => {

    const {handleSubmit} = props;

    return (
        <form className={s.newMessageForm} onSubmit={handleSubmit}>
            <Field className={s.newMessageInput} component="input" name="newMessageInput" type="text"/>
            <button className={s.submitBtn} type='submit'>
                Send
            </button>
        </form>
    )
}

export default reduxForm({
    form: 'mew-message-form'
})(NewMessageForm);