import Users from "./Users";
import UsersC from './UsersС';
import {connect} from "react-redux";
import {followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;