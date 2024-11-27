import React, { useContext, useState } from "react";
import { Alert, Text, View } from "react-native";
import * as S from './styles'
import { ToggleSwitch } from "../../components/ToggleSwitch";
import { Separator } from "../../components/Separator";
import { ConfigProps } from "./types";
import { AuthContext } from '../../global/AuthContext/AuthGlobal'
import { Button } from "../../components/Button";

export function Config() {
    const auth = useContext(AuthContext)

    

    const [config, setConfig] = useState<ConfigProps>({
        value: true,
        nomes: [
            {nome: 'Ativar Notificações'},
            {nome: 'Compartilhar Localização'},
            {nome: 'Ativar Modo Escuro'}
        ]
    });

    function handleLogout() {
        Alert.alert(
            "Logout",
            "Sua sessão será finalizada",
            [
                { text: "Cancelar", style: "cancel" },
                { text: "Confirmar", onPress: auth?.signOut },
            ]
        );
    }

    


    return (
        <S.ConfigContainer>
            <S.Header>
                <S.ConfigText>Configurações</S.ConfigText>
            </S.Header>
            
            <S.SettingsContainer>

                {config.nomes.map((item, index) => (

                    <View key={index} style={{ width: "100%", gap: 8}}>
                        <ToggleSwitch label={item.nome} />
                        {index < (config.nomes.length-1) && <Separator/>}
                    </View>

                   ))  
                }

            </S.SettingsContainer>
            <Button 
                onPress={handleLogout} 
                label='Logout'
            />
        </S.ConfigContainer>
      
        
    );
  }