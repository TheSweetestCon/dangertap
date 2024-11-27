import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AuthContext } from "../global/AuthContext/AuthGlobal";


export function Routes(){


    const auth = useContext(AuthContext)
    //const auth = false
    console.log(auth)
    return(
        <NavigationContainer>
            {auth?.isAuthenticated ? <AppRoutes/> : <AuthRoutes/>}
        </NavigationContainer>
    )
}