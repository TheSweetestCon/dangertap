import axios from 'axios'
import { getToken, removeToken } from './authService'
import { Alert } from 'react-native'

export const api = axios.create({
    baseURL: 'http://192.168.1.11:3000/api/'
})

api.interceptors.request.use(async (config) => {
    const token = await getToken()
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

api.interceptors.response.use((response) => response,
    async (error) => {
        if((error.response?.status === 401) && (error.response?.data?.message === "TokenExpiredError")){
            Alert.alert('Sessão expirada.', 'Por favor, faça login novamente')
            removeToken()
            

            //navigate('Login')
        }
        return Promise.reject(error)
    }
)