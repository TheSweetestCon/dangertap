import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AuthContext } from "../global/AuthContext/AuthGlobal";
import { LocationProvider } from "../global/LocationContext/LocationContext";


export function Routes(){


    const auth = useContext(AuthContext)
    //const auth = false
    console.log(auth)
    return(
        <NavigationContainer>
            <LocationProvider>
                {auth?.isAuthenticated ? <AppRoutes/> : <AuthRoutes/>}
            </LocationProvider>
        </NavigationContainer>
    )
}