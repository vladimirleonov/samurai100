import Users from "./Users";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {
    followActionCreator,
    unfollowActionCreator,
    setUsersActionCreator,
    setCurrentPageActionCreator,
    setTotalUsersCountActionCreator,
    isLoadingActionCreator,
    toggleBtnConditionActionCreator,
    getUsersThunkCreator,
    getUsersWithSetTUCThunkCreator
} from "../../redux/users-reducer";
import React from "react";
import {usersAPI} from "../../api/api";

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

        this.props.getUsersWithSetTUCThunkCreator(this.props.pageSize, this.props.currentPage);

        /*usersAPI.getUsers(this.props.pageSize, this.props.currentPage)//getUsers
            .then((data) => {
                debugger;
                this.props.toggleIsLoading(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });*/

        debugger;
    }

    componentWillUnmount() {
        this.props.setUsers([]);
        /*this.props.setCurrentPage(1);*/
    }

    setCurrentPage = (currentPage) => {
        this.props.toggleIsLoading(true);
        this.props.setCurrentPage(currentPage);

        this.props.getUsersThunkCreator(this.props.pageSize, this.props.currentPage);
        /*usersAPI.getUsers(this.props.pageSize, this.props.currentPage)//getUsers
            .then((data) => {
                this.props.toggleIsLoading(false);
                this.props.setUsers(data.items)
            }
        );*/

        debugger;
    }

    render() {
        debugger;
        return (
            this.props.isAuth ?
            <>
                {this.props.isLoading ? <Preloader/> :
                    <Users users = {this.props.users}
                           totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}
                           setCurrentPage = {this.setCurrentPage}
                           disabledArr={this.props.disabledArr}
                           toggleBtnCondition={this.props.toggleBtnCondition}
                    />
                }
            </>
                : <Redirect to='/login'/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        disabledArr: state.usersPage.disabledArr,
        isAuth: state.auth.isAuth
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
    toggleIsLoading: isLoadingActionCreator,
    toggleBtnCondition: toggleBtnConditionActionCreator,
    getUsersWithSetTUCThunkCreator,
    getUsersThunkCreator,
})(UsersContainerAPI);

export default UsersContainer;