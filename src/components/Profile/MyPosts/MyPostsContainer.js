import React from 'react';
import MyPosts from "./MyPosts";
import {
    addPostActionCreator,
} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    debugger;
    return (
        {
            postData: state.profilePage.postData,
            /*newPostValue: state.profilePage.newPostValue*/
        }
    )
}

/*const mapDispatchToProps = (dispatch) => {
    return (
        {
            onAddPost (newPostValue) {
                dispatch(addPostActionCreator(newPostValue))
            },
            /!*onChangeNewPostValue(text) {
                dispatch(changeNewPostValueActionCreator(text))
            }*!/
        }
    )
}*/

const MyPostsContainer = connect(mapStateToProps, {
    onAddPost: addPostActionCreator
})(MyPosts);

export default MyPostsContainer;