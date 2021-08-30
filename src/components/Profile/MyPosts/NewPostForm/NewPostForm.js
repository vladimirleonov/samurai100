import React from 'react';
import s from "../MyPosts.module.css";

class NewPostForm extends React.Component {
    render() {
        return (
            <form onSubmit={handleSubmit} className={s.new_post_form}>
                <textarea name="news" id="33" cols="30" rows="3"></textarea>
                <button className={s.btn} type="button">Send</button>
            </form>
        )
    }
}

export default NewPostForm;

