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

import Preloader from '../common/Preloader';
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


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

        debugger;
    }

    componentWillUnmount() {
        /*this.props.setUsers([]);*/
        /*this.props.setCurrentPage(1);*/
    }

    setCurrentPage = (currentPage) => {
        console.log(this.props.currentPage);
        debugger;
        this.props.toggleIsLoading(true);
        debugger;
        this.props.setCurrentPage(currentPage);
        console.log(this.props.currentPage);
        debugger;
        console.log(this.props.currentPage);
        this.props.getUsersThunkCreator(this.props.pageSize, currentPage);
        console.log(this.props.currentPage);
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
                           disabledArr={this.props.disabledArr}
                           toggleBtnCondition={this.props.toggleBtnCondition}
                    />
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    debugger;
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

const UsersContainer = compose(
    WithAuthRedirect,
    connect(mapStateToProps,
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
        })
)(UsersContainerAPI);

export default UsersContainer;
