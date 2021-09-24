import Users from "./Users";
import {connect} from "react-redux";
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
    }
    componentDidMount() {
        this.props.toggleIsLoading(true);
        this.props.requestUsersWithSetTUCThunkCreator(this.props.pageSize, this.props.currentPage);
    }

    setCurrentPage = (requestedPage) => {
        this.props.toggleIsLoading(true);
        this.props.setCurrentPage(requestedPage);
        this.props.requestUsersThunkCreator(this.props.pageSize, requestedPage);
    }

    render() {
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


const mapStateToProps = (state) => {
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
