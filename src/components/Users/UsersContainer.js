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
    requestUsersThunkCreator,
    requestUsersWithSetTUCThunkCreator
} from "../../redux/users-reducer";
import React from "react";

import Preloader from '../common/Preloader';
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getDisabledBtnsArr,
    getIsLoading,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


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

        this.props.requestUsersWithSetTUCThunkCreator(this.props.pageSize, this.props.currentPage);

        debugger;
    }

    componentWillUnmount() {
        /*this.props.setUsers([]);*/
        /*this.props.setCurrentPage(1);*/
    }

    setCurrentPage = (requestedPage) => {
        console.log(this.props.currentPage);
        debugger;
        this.props.toggleIsLoading(true);
        debugger;
        this.props.setCurrentPage(requestedPage);
        console.log(this.props.currentPage);
        debugger;
        console.log(this.props.currentPage);
        this.props.requestUsersThunkCreator(this.props.pageSize, requestedPage);
        console.log(this.props.currentPage);
        debugger;
    }

    render() {
        console.log('render users');
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
                           disabledBtnsArr={this.props.disabledBtnsArr}
                           toggleBtnCondition={this.props.toggleBtnCondition}
                    />
                }
            </>
        )
    }
}

/*const mapStateToProps = (state) => {
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
}*/

const mapStateToProps = (state) => {
    console.log('mapStateToProps');
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        disabledBtnsArr: getDisabledBtnsArr(state),
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
            requestUsersWithSetTUCThunkCreator,
            requestUsersThunkCreator,
        })
)(UsersContainerAPI);

export default UsersContainer;
