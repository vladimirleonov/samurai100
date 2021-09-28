import React from 'react';
import s from './Users.module.css';
import User from "./User/User";
import Paginator from "./Paginator/Paginator";

const Users = (props) => {

    return (
        <div className={s.wrapper}>
            <div className={s.users__wrapper}>
                {props.users.map(item => <User key={props.id} follow={props.follow} unfollow={props.unfollow} id={item.id} name={item.name} photo={item.photos.small}
                                                    status={item.status} followed={item.followed} country={"item.location.country"} city={"item.location.city"}
                                                    disabledBtnsArr={props.disabledBtnsArr} toggleBtnCondition={props.toggleBtnCondition}/>)}
            </div>

            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} setCurrentPage={props.setCurrentPage} currentPage={props.currentPage}/>

            {/*<div className={s.btnmore__wrapper}>
                <button onClick={this.showMore} className={s.btnmore}>Show more</button>
            </div>*/}
        </div>
    )
}

export default Users;

