import React from 'react';
import s from "./NewPostForm.module.css";

import { Field, reduxForm } from 'redux-form';

/*const required = (value) => (value || typeof value === 'number' ? undefined : 'Required');*/

const rerenderField = ({
    input,
    type,
    className,
    meta: { touched, error, warning }
}) => (
    <div>
        <textarea {...input} type={type} className={className} id="33" rows="3"/>
        {touched &&
        ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </div>
)

const NewPostForm = (props) => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <form onSubmit={handleSubmit} className={s.new_post_form}>
            <Field
                name='textareaValue'
                component={rerenderField}
                className={s.textarea}
                id="33" cols="30"
                rows="3"
                /*validate={[required]}*/
            />
            <button
                disabled={pristine || submitting}
                className={s.btn}
                type="submit"
            >
                Send
            </button>
        </form>
    )
}

export default reduxForm({
    form: 'newPostForm'
})(NewPostForm);

