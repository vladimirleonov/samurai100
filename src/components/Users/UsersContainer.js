import Users from "./Users";
import UsersC from './UsersС';
import {connect} from "react-redux";
import {followActionCreator, unfollowActionCreator, setUsersActionCreator} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow(userId) {
            debugger;
            dispatch(followActionCreator(userId))
        },
        unfollow(userId) {
            debugger;
            dispatch(unfollowActionCreator(userId))
        },
        setUsers(users) {
            debugger;
            dispatch(setUsersActionCreator(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;