import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import * as S from './styles';
import { ToggleSwitch } from "../../components/ToggleSwitch";
import { Separator } from "../../components/Separator";
import { ConfigProps } from "./types";
import { AuthContext } from '../../global/AuthContext/AuthGlobal';
import { Button } from "../../components/Button";
import * as Notifications from 'expo-notifications'

export function Config() {
    const auth = useContext(AuthContext);
    const [notification, setNotification] = useState<boolean>(false);

    const handleToggle = async (value: boolean) => {
        if (value) {
            const { status } = await Notifications.requestPermissionsAsync();

            if (status) {
                setNotification(true);
                console.log("Notificações ativadas!");
                console.log(await Notifications.getExpoPushTokenAsync())
                // Salve o estado no backend, se necessário
            } else {
                Alert.alert(
                    "Erro",
                    "Não foi possível ativar notificações. Verifique as permissões do dispositivo."
                );
            }

        } else {
            console.log("Notificações Desativadas!");
            setNotification(false);
            // Atualize o backend ou o estado para refletir a desativação
        }
    };

    const [config, setConfig] = useState<ConfigProps>({
        value: true,
        nomes: [
            { nome: 'Ativar Notificações' },
            { nome: 'Compartilhar Localização' },
            { nome: 'Ativar Modo Escuro' }
        ]
    });

    const handleLogout = () => {
        Alert.alert(
            "Logout",
            "Sua sessão será finalizada",
            [
                { text: "Cancelar", style: "cancel" },
                { text: "Confirmar", onPress: auth?.signOut },
            ]
        );
    };

    return (
        <S.ConfigContainer>
            <S.Header>
                <S.ConfigText>Configurações</S.ConfigText>
            </S.Header>
            
            <S.SettingsContainer>
                {config.nomes.map((item, index) => (
                    <S.Options key={index}>
                        <S.SwitchView>
                            <S.SwitchText>{item.nome}</S.SwitchText>
                            {item.nome === 'Ativar Notificações' ? (
                                <ToggleSwitch 
                                    label='' 
                                    onToggle={handleToggle}
                                />
                            ) : (
                                <ToggleSwitch 
                                    label='' 
                                    onToggle={(value) => console.log(`${item.nome} toggle: ${value}`)}
                                />
                            )}
                        </S.SwitchView>
                        
                        {index < (config.nomes.length - 1) && <Separator />}
                    </S.Options>
                ))}
            </S.SettingsContainer>
            
            <Button 
                onPress={handleLogout} 
                label='Logout'
            />
        </S.ConfigContainer>
    );
}
