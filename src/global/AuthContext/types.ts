import { ReactNode } from "react";

export interface AuthContextData {
    isAuthenticated: boolean;
    signIn: (email: string, senha: string) => Promise<void>;
    signOut: () => Promise<void>
}

export interface AuthProviderProps {
    children: ReactNode
}