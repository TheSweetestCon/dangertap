import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { getToken, login, removeToken } from '../../service/authService';
import { AuthContextData,  AuthProviderProps} from './types';

export const AuthContext = createContext<AuthContextData | null>(null)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const checkAuth = async () => {
            const token = await getToken();
            setIsAuthenticated(!!token);
        };

        checkAuth();
    }, []);

    const signIn = async (email: string, senha: string) => {
        await login(email, senha);
        setIsAuthenticated(true);
    };

    const signOut = async () => {
        await removeToken();
        setIsAuthenticated(false);
        console.log(isAuthenticated)
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};