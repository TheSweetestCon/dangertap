import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://192.168.14.118:3000/api/'
})
