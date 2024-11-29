import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { getToken, getUser, login, removeToken, responsavel } from '../../service/authService';
import { AuthContextData,  AuthProviderProps} from './types';

export const AuthContext = createContext<AuthContextData | null>(null)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        const checkAuth = async () => {
            const token = await getToken();
            const userData = await getUser()

            setIsAuthenticated(!!token);

            if (userData){
                setUser(JSON.parse(userData))
            }
        };

        checkAuth();
    }, []);

    const signIn = async (email: string, senha: string) => {
        await login(email, senha);
        const userData = await getUser(); // Recupera os dados do AsyncStorage
        
        if (userData){
            setUser(JSON.parse(userData))
        }

        setIsAuthenticated(true);
    };

    const signOut = async () => {
        await removeToken();
        setUser(null)
        setIsAuthenticated(false);
    };

    const getResponsavel = async (id: number) => {

            const data = await responsavel(id)
            console.log(id)
            return data

    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, signOut, user, getResponsavel }}>
            {children}
        </AuthContext.Provider>
    );
};