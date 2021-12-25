import {createSelector} from "reselect";

export const getUsersSelector = (state) => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);
})

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsLoading = (state) => {
    return state.usersPage.isLoading;
}

export const getDisabledBtnsArr = (state) => {
    return state.usersPage.disabledBtnsArr;
}

