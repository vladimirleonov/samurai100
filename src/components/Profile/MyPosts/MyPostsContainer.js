import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, changeNewPostValue} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    const state = store.getState();
                    /*debugger;*/
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
}

export default MyPostsContainer;