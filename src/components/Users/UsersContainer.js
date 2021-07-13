import Users from "./Users";
import {connect} from "react-redux";
import {followActionCreator, unfollowActionCreator} from "../../redux/users-reducer";

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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;