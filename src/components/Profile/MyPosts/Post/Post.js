import React from 'react';
import s from './Post.module.css';
import post_img from "../../post_img.png";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={post_img} alt="#" />
            <div className={s.descr}>
                <span className={s.text}>{props.text}</span>
                <div className={s.like__wrapper}>
                    <span className={s.like}>like</span>
                    <span className={s.like__counr}>{props.likeCount}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;

