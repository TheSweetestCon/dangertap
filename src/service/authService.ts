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

export const responsavel = async (id: number): Promise<ResponsavelType[]> => {
    const token = await getToken()

    if(!token){
        throw new Error('Token não encontrado, faça login!')
    }

    try {
        const response = await api.get(`/users/responsavel?id=${id}`)
        return response.data
    } catch (error: any) {
        throw{
            status: error.response?.status || 500,
            message: error.response?.data?.message || 'Erro no servidor.'
        }
    }


    
}