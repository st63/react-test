import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:3200',
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
})

export const login = async (formData: any) => {
    const { data } = await request.get(`/users?id=${formData.username}:${formData.password}`)
    return data[0]
}

export const registration = (formData: any) => request.post('/users', { ...formData, id: `${formData.username}:${formData.password}`})

export const postList = async (username: string) => {
    const { data } = await request.get(`/posts?username=${username}`)
    return data
}

export const postDetail = async (postId: string) => {
    const { data } = await request.get(`/posts?id=${postId}`)
    return data
}

export const addPost = async (postData: any) => {
    const { data } = await request.post(`/posts`, postData)
    return data
}
