import React from 'react';
import s from './Users.module.css';
import User from "./User/User";

import * as axios from 'axios';

class UsersC extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        debugger;
    }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                console.log(response.data);
                debugger;
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
        debugger;
    }

    componentWillUnmount() {
        this.props.setUsers([]);
        this.props.setCurrentPage(1);
    }

    setCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items));
        debugger;
    }

    render() {
        // debugger;

        const pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];
        for (let i = 0; i < pageCount; i++ ) {
            pages[i] = i + 1;
        }

        return (
            <div className={s.wrapper}>
                <div className={s.users__wrapper}>
                    {this.props.users.map(item => <User follow={this.props.follow} unfollow={this.props.unfollow} id={item.id} name={item.name} photo={item.photos.small}
                                                        status={item.status} followed={item.followed} country={"item.location.country"} city={"item.location.city"}/>)}
                </div>
                <div className={s.pagination__wrapper}>
                    <div className={s.pagination}>
                        {pages.map(p => <span onClick={() => {this.setCurrentPage(p)}} className={this.props.currentPage === p && s.active__item }>{p}</span>)}
                    </div>
                </div>
                {/*<div className={s.btnmore__wrapper}>
                    <button onClick={this.showMore} className={s.btnmore}>Show more</button>
                </div>*/}
            </div>
        )
    }
}

export default UsersC;

