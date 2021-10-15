import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '049bf372-a181-4f49-a94d-95ca5d3b724f'
    }
})

export const usersAPI = {
    async getUsers (pageSize = 10, currentPage = 1) {
        /*return (
            instance.get(`users?count=${pageSize}&page=${currentPage}`)
                .then(response => response.data)
        )*/
        const response = await instance.get(`users?count=${pageSize}&page=${currentPage}`);

        return response.data;
    },
    async follow (userId) {
        /*return (
            instance.post(`follow/${userId}`)
                .then(response => response.data)
        )*/

        const response = await instance.post(`follow/${userId}`);

        return response.data;
    },
    async unfollow (userId) {
        /*return (
            instance.delete(`follow/${userId}`)
                .then(response => response.data)
        )*/

        const response = await instance.delete(`follow/${userId}`);

        return response.data;
    }
}

export const profileAPI = {
    async getUserProfile (userId) {
        /*return (
            instance.get(`profile/${userId}`)
                .then(response => response.data)
        )*/

        const response = await instance.get(`profile/${userId}`);

        return response.data;
    },
    async getStatus (userId) {
        /*return (
            instance.get(`profile/status/${userId}`)
                .then(response => response.data)
        )*/
        const response = await instance.get(`profile/status/${userId}`);

        return response.data;
    },
    async updateStatus (status) {
        /*return (
            instance.put(`profile/status`, {
                status
            })
                .then(response => response.data)
        )*/
        const response = await instance.put(`profile/status`, {
            status
        });

        return response.data;
    },
    async uploadProfilePhoto (image) {
        const formData = new FormData();
        formData.append("image", image);
        debugger;
        const response = await instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return response.data;
    },
    async saveProfileData (profileData) {
        console.log(profileData);
        debugger;
        const response = await instance.put(`profile`, profileData);

        return response.data;
    }
}

export const authAPI = {
    getAuthData () {
        return (
            instance.get(`auth/me`)
                .then(response => response.data)
        )
    },
    login (email, password, rememberMe = false) {
        debugger;
        return (
            instance.post(`auth/login`, {
                email,
                password,
                rememberMe
            })
                .then(response => response.data)
        )
    },
    logout () {
        debugger;
        return (
            instance.delete(`auth/login`)
                .then(response => response.data)
        )
    }
}

