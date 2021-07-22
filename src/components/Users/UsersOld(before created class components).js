import React from 'react';
import s from './Users.module.css';
import User from "./User/User";

const UsersOldBeforeCreatedClassComponents = (props) => {
    debugger;
    const users = props.users.map(item => <User follow={props.follow} unfollow={props.unfollow} userId={item.id} userName={item.userName} subscription={item.subscription} status={item.status} country={item.location.country} city={item.location.city}/>);
    return (
        <div className={s.wrapper}>
            <div className={s.users__wrapper}>
                {users}
                {/*<User userName = 'Dmitry K.' subscription = 'Follow' status = "I'm looking for a job" country = 'Belarus' city = 'Minsk'/>
                <User userName = 'Svetlana D.' subscription = 'Unfollow' status = "I'm ready to help you" country = 'Russia' city = 'Moscow'/>*/}
            </div>
            <div className={s.btnmore__wrapper}>
                <button className={s.btnmore}>Show more</button>
            </div>
        </div>
    )
}

export default UsersOldBeforeCreatedClassComponents;