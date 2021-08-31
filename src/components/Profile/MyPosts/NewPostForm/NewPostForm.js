import React from 'react';
import s from "./NewPostForm.module.css";

import { Field, reduxForm } from 'redux-form';

const NewPostForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit} className={s.new_post_form}>
            <Field name='textareaValue' component="textarea" className={s.textarea} id="33" cols="30" rows="3"></Field>
            <button className={s.btn} type="submit">Send</button>
        </form>
    )
}

export default reduxForm({
    form: 'newPostForm'
})(NewPostForm);

