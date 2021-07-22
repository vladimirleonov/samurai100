import React from 'react';
import s from './Users.module.css';
import User from "./User/User";

const Users = (props) => {
    // debugger;

    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 0; i < pageCount; i++ ) {
        pages[i] = i + 1;
    }

    return (
        <div className={s.wrapper}>
            <div className={s.users__wrapper}>
                {props.users.map(item => <User follow={props.follow} unfollow={props.unfollow} id={item.id} name={item.name} photo={item.photos.small}
                                                    status={item.status} followed={item.followed} country={"item.location.country"} city={"item.location.city"}/>)}
            </div>
            <div className={s.pagination__wrapper}>
                <div className={s.pagination}>
                    {pages.map(p => <span onClick={() => {props.setCurrentPage(p)}} className={props.currentPage === p && s.active__item }>{p}</span>)}
                </div>
            </div>
            {/*<div className={s.btnmore__wrapper}>
                <button onClick={this.showMore} className={s.btnmore}>Show more</button>
            </div>*/}
        </div>
    )
}

export default Users;

