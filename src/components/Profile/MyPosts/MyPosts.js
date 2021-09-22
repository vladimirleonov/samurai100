import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import NewPostForm from './NewPostForm/NewPostForm';

const MyPosts = React.memo((props) => {

    console.log('render myPosts');

    const newPostData = props.postsData.map((item) => {
        return <Post key={item.id} text={item.text} likeCount={item.likeCount}/>
    })

    const onSubmit = (values) => {
        const { textareaValue } = values;
        /*const {textareaValue} = {values};*/
        /*console.log(values.textareaValue);*/

        if(textareaValue) {
            props.addPost(textareaValue);
        }

    }

    return (
        <div className={s.my__posts}>
            <div className={s.header}>My posts</div>
            <NewPostForm onSubmit={onSubmit} addPost={props.onAddPost}/>
            <div className={s.posts}>
                {newPostData}
            </div>
        </div>
    )
})

export default MyPosts;