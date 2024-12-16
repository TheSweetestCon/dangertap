import { ReactNode } from "react";

export interface AuthContextData {
    isAuthenticated: boolean;
    signIn: (email: string, senha: string) => Promise<void>;
    signOut: () => Promise<void>;
    user: User;
    getResponsavel: (id: number) => Promise<any>;
    requestNotificationPermission: () => Promise<any>;
    sendNotification: (id: number, userName: string) => Promise<void>
}

interface User {
    id: number,
    nome: string,
    email: string
}

export interface AuthProviderProps {
    children: ReactNode
}