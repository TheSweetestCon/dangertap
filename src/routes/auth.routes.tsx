import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../pages/login";

export type RootStackParamList = {
    Login: undefined; // ou { /* parâmetros aqui se houver */ }
};

const Stack = createStackNavigator<RootStackParamList>();



export function AuthRoutes(){
    return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
    )
}
