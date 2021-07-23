import Users from "./Users";
import {connect} from "react-redux";
import {followActionCreator, unfollowActionCreator, setUsersActionCreator,
    setCurrentPageActionCreator, setTotalUsersCountActionCreator, isLoadingActionCreator} from "../../redux/users-reducer";
import React from "react";
import * as axios from "axios";

import Preloader from '../common/Preloader';

//UsersContainerAPI component for ajax
class UsersContainerAPI extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        debugger;
    }
    componentDidMount() {
        debugger;
        this.props.toggleIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                console.log(response.data);
                console.log(this.props);
                debugger;
                this.props.toggleIsLoading(false);
                console.log(this.props);
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
        this.props.toggleIsLoading(true);
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.toggleIsLoading(false);
                this.props.setUsers(response.data.items)
            }
        );
        debugger;
    }

    render() {
        debugger;
        return (
            <>
                {this.props.isLoading ? <Preloader/> :
                    <Users users = {this.props.users}
                           totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}
                           setCurrentPage = {this.setCurrentPage}
                    />
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        follow(userId) {
            debugger;
            dispatch(followActionCreator(userId));
        },
        unfollow(userId) {
            debugger;
            dispatch(unfollowActionCreator(userId));
        },
        setUsers(users) {
            debugger;
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage(page) {
            debugger;
            dispatch(setCurrentPageActionCreator(page));
        },
        setTotalUsersCount(totalUsersCount) {
            debugger;
            dispatch(setTotalUsersCountActionCreator(totalUsersCount));
        },
        isLoadingFunction(value) {
            debugger;
            dispatch(isLoadingActionCreator(value));
        }
    }
}*/

const UsersContainer = connect(mapStateToProps,
    {
    follow: followActionCreator,
    unfollow: unfollowActionCreator,
    setUsers: setUsersActionCreator,
    setCurrentPage: setCurrentPageActionCreator,
    setTotalUsersCount: setTotalUsersCountActionCreator,
    toggleIsLoading: isLoadingActionCreator

})(UsersContainerAPI);

export default UsersContainer;