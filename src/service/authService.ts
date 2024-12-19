import AsyncStorage from "@react-native-async-storage/async-storage";
import {ResponsavelType, UserType} from './types'
import { api } from './api'

const TOKEN_KEY = '@authToken'
const USER_KEY = '@user'

export const saveToken = async (token: string): Promise<void> => {
    await AsyncStorage.setItem(TOKEN_KEY, token)
}

export const getToken = async (): Promise<string | null> => {
    return await AsyncStorage.getItem(TOKEN_KEY)
}

export const removeToken = async (): Promise<void> => {

    await AsyncStorage.removeItem(TOKEN_KEY)
    
}

export const saveUser = async (user: UserType): Promise<void> => {
    console.log('Aqui: ', user, ' | FIM')
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user))
}

export const removeUser = async (): Promise<void> => {
    await AsyncStorage.removeItem(USER_KEY)
}

export const getUser = async (): Promise<string | null> => {
    return await AsyncStorage.getItem(USER_KEY) // O certo seria usar Promise<UserType | null> com JSON.parse, mas não funcionou
}

export const login = async (email: string, senha: string): Promise<void> => {

    try {
        const response = await api.post('/auth/login', { email, senha });
        
        const { token } = response.data.data;
        const userData = response.data.data.user

        await saveUser(userData)
        await saveToken(token);

    } catch (error: any) {
        throw {
            status: error.response?.status || 500,
            message: error.response?.data?.message || 'Erro no servidor. Tente novamente mais tarde.'
        }
    }

};

export const logout = async (): Promise<void> => {
    await removeUser()
}

export const responsavel = async (id: number): Promise<ResponsavelType[]> => {
    const token = await getToken()

    if(!token){
        throw new Error('Token não encontrado, faça login!')
    }

    try {
        const response = await api.get(`/resp?id=${id}`)

        return response.data
    } catch (error: any) {
        throw{
            status: error.response?.status || 500,
            message: error.response?.data?.message || 'Erro no servidor.'
        }
    }
    
}

export const registerPushNotification = async (id: number, token: string, platform: string, deviceName: string | null) => {
    if(!token || !id) {
        throw new Error("Usuário ou token não encontrados!");
    }

    try {
        const response = await api.post(`/push/set`, {id, token, platform, deviceName})
        console.log('Resposta: ', response)
    } catch (error: any) {
        throw{
            status: error.response?.status || 500,
            message: error.response?.data?.message || 'Erro no servidor.'
        }
    }
}

export const sendButtonNotification = async (id: number, title: string, message: string) => {
    if (!id){
        console.log('Necessário informar o usuário!')
    }

    
    try {
        
        const response = await api.post(`/push/send`, {id, title, message})
        console.log('Resposta: ', response)

    } catch (error: any) {
        throw{
            status: error.response?.status || 500,
            message: error.response?.data?.message || 'Erro no servidor.'
        }
    }
}

export const searchUserByCpf = async (cpf: string) => {
    try {
        console.log(cpf)
        const response = await api.post('/users/search', {cpf})

        return response.data.message

    } catch (error: any) {
        throw{
            status: error.response?.status || 500,
            message: error.response?.data?.message || 'Erro no servidor.'
        }
    }
}

export const searchUserByEmail = async (email: string) => {
    try {
        console.log(email)
        const response = await api.post('/users/search', {email})
        console.log(response.data.message)
        return response.data.message

    } catch (error: any) {
        throw{
            status: error.response?.status || 500,
            message: error.response?.data?.message || 'Erro no servidor.'
        }
    }
}