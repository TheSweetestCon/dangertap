import React, { useContext, useEffect } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../pages/login";
import { Home } from '../pages/home'
import { Config } from '../pages/config'
import { Mapa } from '../pages/mapa'
import theme from '../global/theme'
import * as Notifications from 'expo-notifications'
import {FontAwesome} from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AuthContext } from "../global/AuthContext/AuthGlobal";


export type RootStackParamList = {
    Login: undefined; // ou { /* parâmetros aqui se houver */ }
};

const Tab = createBottomTabNavigator();

export function AppRoutes(){
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext?.requestNotificationPermission();
    }, [])

    Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: true,      
          shouldSetBadge: false,
        }),
      });

    return(
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: theme.colors.background,
                    borderTopColor: '#C0C0C0',
                    borderTopWidth: 0.5,
                },
                tabBarActiveTintColor: theme.colors.title,
                tabBarInactiveTintColor: theme.colors.light_title,
            }}
            >
            
                <Tab.Screen name="Home" component={Home} 
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <FontAwesome name="home" size={size-3} color={color} />
                        )
                    }}
                />

                <Tab.Screen name="Mapa" component={Mapa}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <FontAwesome name="map" size={size-6} color={color} />
                        )
                    }}
                />
                <Tab.Screen name="Config" component={Config}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <Ionicons name="settings" size={size-3} color={color} />
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