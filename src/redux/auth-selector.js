export const getIsAuth = (state) => {
    return state.auth.isAuth;
}

export const getAuthorizedUserId = (state) => {
    return state.auth.id;
}