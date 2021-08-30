import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import NewPostForm from './NewPostForm/NewPostForm.module.css';

const MyPosts = (props) => {

    const newPostData = props.postData.map((item) => {
        return <Post key={item.id} text={item.text} likeCount={item.likeCount}/>
    })

    return (
        <div className={s.my__posts}>
            <div className={s.header}>My posts</div>
            <NewPostForm/>
            <div className={s.posts}>
                {newPostData}
            </div>
        </div>
    )
}

export default MyPosts;