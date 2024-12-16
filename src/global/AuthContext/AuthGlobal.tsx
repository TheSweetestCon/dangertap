import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { getToken, getUser, login, removeToken, responsavel, registerPushNotification, sendButtonNotification } from '../../service/authService';
import { AuthContextData,  AuthProviderProps} from './types';
import * as Notifications from 'expo-notifications'
import { Alert, Linking, Platform } from 'react-native';
import * as Device from 'expo-device';


export const AuthContext = createContext<AuthContextData | null>(null)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        const checkAuth = async () => {
            const token = await getToken();
            const userData = await getUser()

            setIsAuthenticated(!!token);

            if (userData){
                setUser(JSON.parse(userData))
            }
        };

        checkAuth();
    }, []);

    const signIn = async (email: string, senha: string) => {
        await login(email, senha);
        const userData = await getUser(); // Recupera os dados do AsyncStorage
        
        if (userData){
            setUser(JSON.parse(userData))
        }

        setIsAuthenticated(true);
    };

    const signOut = async () => {
        await removeToken();
        setUser(null)
        setIsAuthenticated(false);
    };

    const getResponsavel = async (id: number) => {

            const data = await responsavel(id)
            //console.log(id)
            return data

    }

    const requestNotificationPermission = async () => {
        try {
            let token;
    
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            console.log("Status atual:", existingStatus);
            let finalStatus = existingStatus;
    
            if (existingStatus !== 'granted' && existingStatus !== 'denied') {
                const { status } = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }
    
            if (finalStatus === 'denied') {
                Alert.alert(
                    "Permissão Necessária",
                    "As notificações foram desativadas. Por favor, habilite-as manualmente nas configurações do dispositivo.",
                    [
                        {
                            text: "Abrir Configurações",
                            onPress: async () => {
                                if (Platform.OS === 'ios') {
                                    await Linking.openURL('app-settings:');
                                } else {
                                    await Linking.openSettings();
                                }
                            }
                        },
                        { text: "Cancelar", style: "cancel" }
                    ]
                );
                return;
            }
    
            if (finalStatus !== 'granted') {
                alert('Falha ao obter o token para notificações push!');
                return;
            }

            const {id} = user
    
            token = (await Notifications.getExpoPushTokenAsync()).data;
            console.log('Token de Notificação:', token);
            
            

            registerPushNotification(id, token, Platform.OS, Device.modelName)

            return token;
        } catch (error) {
            console.error("Erro ao solicitar permissões de notificação:", error);
        }
    };
    
    const sendNotification = async (id: number, userName: string) => {
        const name = userName.split(" ")[0]
        const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        const title = "DangerTAP Acionado!";
        const message = formattedName + " está precisando de ajuda!"

        await sendButtonNotification(id, title, message)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, signOut, user, getResponsavel, requestNotificationPermission, sendNotification }}>
            {children}
        </AuthContext.Provider>
    );
};