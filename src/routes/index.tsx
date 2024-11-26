import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";


export function Routes(){
    async function fakeGetToken() {
        return null; // Substitua por AsyncStorage.getItem('token') ou lógica de autenticação
    }

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        // Simulação: verificar token armazenado
        const checkLoginStatus = async () => {
            const token = await fakeGetToken();
            setIsLoggedIn(!!token);
        };
        checkLoginStatus();
    }, []);
    

    return(
        <NavigationContainer>
            {isLoggedIn ? <AppRoutes/> : <AuthRoutes/>}
        </NavigationContainer>
    )
}