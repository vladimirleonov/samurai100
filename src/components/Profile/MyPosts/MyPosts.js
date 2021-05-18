import React from 'react';
import s from './MyPosts.module.css';
import post_img from "../post_img.png";

const MyPosts = () => {
    return (
        <div className={s.my__posts}>
            <div className={s.header}>My posts</div>
            <form action="#" className={s.new__post}>
                <textarea name="news" id="33" cols="30" rows="3"></textarea>
                <button className={s.btn} type="button">Send</button>
            </form>
            <div className={s.posts}>
                <div className={s.item}>
                    <img src={post_img} alt="#" />
                    <div className={s.descr}>
                        <span className={s.text}>dsfdsfdsfds</span>
                        <span className={s.like}>5</span>
                    </div>
                </div>
                <div className={s.item}>
                    <img src={post_img} alt="#" />
                    <div className={s.descr}>
                        <span className={s.text}>dsfdsfdsfds</span>
                        <span className={s.like}>3</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;