import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../pages/login";
import { Home } from '../pages/home'
import { Config } from '../pages/config'
import { Mapa } from '../pages/mapa'
import theme from '../global/theme'


export type RootStackParamList = {
    Login: undefined; // ou { /* parâmetros aqui se houver */ }
};

const Tab = createBottomTabNavigator();

export function AppRoutes(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: theme.colors.background,
                    borderTopColor: 'transparent'
                },
                tabBarActiveTintColor: theme.colors.title,
                tabBarInactiveTintColor: theme.colors.light_title
                    
                
            }}
            >
            
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="Mapa" component={Mapa}/>
                <Tab.Screen name="Config" component={Config}/>
        </Tab.Navigator>
    )
}


/*const Stack = createNativeStackNavigator<RootStackParamList>();
export function AppRoutes(){
    return <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Welcome' component={Login} />
    </Stack.Navigator>
}*/