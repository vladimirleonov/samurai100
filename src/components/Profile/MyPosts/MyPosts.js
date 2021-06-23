import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    const newPostData = props.postData.map((item) => {
        return <Post text={item.text} likeCount={item.likeCount}/>
    })

    const textareaRef = React.createRef();

    function onAddPost () {
        /*console.log(textareaRef.current.value);*/
        props.dispatch({type: 'ADD-POST'});
    }

    function onChangeNewPostValue () {
        props.dispatch({type: 'CHANGE-NEW-POST-VALUE', data: textareaRef.current.value})
        /*props.changeNewPostValue(textareaRef.current.value);*/
    }

    return (
        <div className={s.my__posts}>
            <div className={s.header}>My posts</div>
            <form action="#" className={s.new__post}>
                <textarea onChange={onChangeNewPostValue} ref={textareaRef} value={props.newPostValue} name="news" id="33" cols="30" rows="3"></textarea>
                <button onClick={onAddPost} className={s.btn} type="button">Send</button>
            </form>
            <div className={s.posts}>
                {newPostData}
            </div>
        </div>
    )
}

export default MyPosts;