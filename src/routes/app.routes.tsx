import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../pages/login";
import { Home } from '../pages/home'
import { Config } from '../pages/config'
import { Mapa } from '../pages/mapa'
import theme from '../global/theme'

import {FontAwesome} from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons';


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
                    borderTopColor: 'transparent',
                    borderTopWidth: 0
                },
                tabBarActiveTintColor: theme.colors.title,
                tabBarInactiveTintColor: theme.colors.light_title,
                tabBarLabelStyle:{
                    paddingBottom: 5

                },
                    
                
            }}
            >
            
                <Tab.Screen name="Home" component={Home} 
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <FontAwesome name="home" size={size} color={color} />
                        )
                    }}
                />

                <Tab.Screen name="Mapa" component={Mapa}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <FontAwesome name="map" size={size} color={color} />
                        )
                    }}
                />
                <Tab.Screen name="Config" component={Config}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <Ionicons name="settings" size={size} color={color} />
                        )
                    }}
                />
        </Tab.Navigator>
    )
}


/*const Stack = createNativeStackNavigator<RootStackParamList>();
export function AppRoutes(){
    return <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Welcome' component={Login} />
    </Stack.Navigator>
}*/