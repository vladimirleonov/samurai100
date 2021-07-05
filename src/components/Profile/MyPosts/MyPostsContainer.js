import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, changeNewPostValue} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {

    function onAddPost () {
        props.dispatch(addPostActionCreator());
    }

    function onChangeNewPostValue (text) {
        props.dispatch(changeNewPostValue(text));
    }

    return (
        <MyPosts postData={props.postData} newPostValue={props.newPostValue} onAddPost={onAddPost} onChangeNewPostValue={onChangeNewPostValue}/>
    )
}

export default MyPostsContainer;