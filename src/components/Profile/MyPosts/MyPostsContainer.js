import React from 'react';
import MyPosts from "./MyPosts";
import {
    addPostActionCreator,
    changeNewPostValueActionCreator
} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {changeNewMessageActionCreator} from "../../../redux/messages-reducer";

/*const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    const state = store.getState();
                    /!*debugger;*!/
                    function onAddPost () {
                        store.dispatch(addPostActionCreator());
                    }

                    function onChangeNewPostValue (text) {
                        store.dispatch(changeNewPostValue(text));
                    }

                    return (
                        <MyPosts postData={state.profilePage.postData} newPostValue={state.profilePage.newPostValue} onAddPost={onAddPost} onChangeNewPostValue={onChangeNewPostValue}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}*/

const mapStateToProps = (state) => {
    debugger;
    return (
        {
            postData: state.profilePage.postData,
            newPostValue: state.profilePage.newPostValue
        }
    )
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            onAddPost () {
                dispatch(addPostActionCreator())
            },
            onChangeNewPostValue(text) {
                dispatch(changeNewPostValueActionCreator(text))
            }
        }
    )
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;