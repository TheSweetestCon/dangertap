import axios from 'axios'
import { getToken } from './authService'

export const api = axios.create({
    baseURL: 'http://192.168.14.118:3000/api/'
})

api.interceptors.request.use(async (config) => {
    const token = await getToken()
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})