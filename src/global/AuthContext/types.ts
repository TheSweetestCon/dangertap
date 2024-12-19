import { ReactNode } from "react";

export interface AuthContextData {
    isAuthenticated: boolean;
    signIn: (email: string, senha: string) => Promise<void>;
    signOut: () => Promise<void>;
    user: User;
    getResponsavel: (id: number) => Promise<any>;
    requestNotificationPermission: () => Promise<any>;
    sendNotification: (id: number, userName: string, latitude?: number, longitude?: number, precisao?: number, emergencia?: boolean) => Promise<void>
    getUserCpf: (cpf: string) => Promise<any>;
    getUserEmail: (email: string) => Promise<any>;
    signUp: (nome: string, cpf: string, data_nascimento: string, email: string, genero: string, senha: string) => Promise<any>;
    registerResponsavel: (id: number, email: string) => Promise<any>;
}

interface User {
    id: number,
    nome: string,
    email: string
}

export interface AuthProviderProps {
    children: ReactNode
}