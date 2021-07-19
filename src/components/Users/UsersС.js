import React from 'react';
import s from './Users.module.css';
import User from "./User/User";

import * as axios from 'axios';

class UsersC extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                console.log(response);
                debugger;
                props.setUsers(response.data.items);
            });
        debugger;
    }
    render() {
        debugger;
        return (
            <div className={s.wrapper}>
                <div className={s.users__wrapper}>
                    {this.props.users.map(item => <User follow={this.props.follow} unfollow={this.props.unfollow} id={item.id} name={item.name} photo={item.photos.small}
                                                        status={item.status} followed={item.followed} country={"item.location.country"} city={"item.location.city"}/>)}
                </div>
                <div className={s.btnmore__wrapper}>
                    <button className={s.btnmore}>Show more</button>
                </div>
            </div>
        )
    }
}

export default UsersC;

