import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '049bf372-a181-4f49-a94d-95ca5d3b724f'
    }
})

export const usersAPI = {
    getUsers (pageSize = 10, currentPage = 1) {
        return (
            instance.get(`users?count=${pageSize}&page=${currentPage}`)
                .then(response => response.data)
        )
    },
    follow (userId) {
        return (
            instance.post(`follow/${userId}`)
                .then(response => response.data)
        )
    },
    unfollow (userId) {
        return (
            instance.delete(`follow/${userId}`)
                .then(response => response.data)
        )
    }
}

export const profileAPI = {
    getUserProfile (userId) {
        return (
            instance.get(`profile/${userId}`)
                .then(response => response.data)
        )
    },
    getStatus (userId) {
        return (
            instance.get(`profile/status/${userId}`)
                .then(response => response.data)
        )
    },
    updateStatus (status) {
        return (
            instance.put(`profile/status`, {
                status
            })
                .then(response => response.data)
        )
    }
}

export const authAPI = {
    getAuthData () {
        return (
            instance.get(`auth/me`)
                .then(response => response.data)
        )
    },
    login (email, password, rememberMe) {
        debugger;
        return (
            instance.post(`auth/login`, {
                email,
                password,
                rememberMe
            })
                .then(response => response.data)
        )
    }
}

