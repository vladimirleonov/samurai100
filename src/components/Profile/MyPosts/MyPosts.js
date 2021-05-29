import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    const newPostData = props.postData.map((item) => {
        return <Post text={item.text} likeCount={item.likeCount}/>
    })

    return (
        <div className={s.my__posts}>
            <div className={s.header}>My posts</div>
            <form action="#" className={s.new__post}>
                <textarea name="news" id="33" cols="30" rows="3"></textarea>
                <button className={s.btn} type="button">Send</button>
            </form>
            <div className={s.posts}>
                {newPostData}
            </div>
        </div>
    )
}

export default MyPosts;