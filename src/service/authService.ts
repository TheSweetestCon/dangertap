import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from './api'

const TOKEN_KEY = '@authToken'

export const saveToken = async (token: string): Promise<void> => {
    await AsyncStorage.setItem(TOKEN_KEY, token)
}

export const getToken = async (): Promise<string | null> => {
    return await AsyncStorage.getItem(TOKEN_KEY)
}

export const removeToken = async (): Promise<void> => {

    await AsyncStorage.removeItem(TOKEN_KEY)

}


export const login = async (email: string, senha: string): Promise<void> => {

    try {
        const response = await api.post('/auth/login', { email, senha });
        const token = response.data.data.token;
        await saveToken(token);
        console.log('Token salvo: ', token)
    } catch (error: any) {
        throw {
            status: error.response?.status || 500,
            message: error.response?.data?.message || 'Erro no servidor. Tente novamente mais tarde.'
        }
    }

};

export const getProtectedData = async (): Promise<any> => {
    const token = await getToken()

    if(!token){
        throw new Error('Token não encontrado, faça login!')
    }

    const response = await api.get('/users', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data
}