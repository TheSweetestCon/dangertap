import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../pages/login";
import { Cadastro } from '../pages/cadastro'

export type RootStackParamList = {
    Login: undefined; // ou { /* parâmetros aqui se houver */ }
    Cadastro: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();



export function AuthRoutes(){
    return (
    <Stack.Navigator initialRouteName="Cadastro" screenOptions={{headerShown: false}}>
        <Stack.Screen name='Cadastro' component={Cadastro} />
    </Stack.Navigator>
    )
}
