import React, { useState } from "react";
import { Text, View } from "react-native";
import * as S from './styles'
import { ToggleSwitch } from "../../components/ToggleSwitch";
import { Separator } from "../../components/Separator";
import { ConfigProps } from "./types";

export function Config() {
    const [config, setConfig] = useState<ConfigProps>({
        value: true,
        nomes: [
            {nome: 'Ativar Notificações'},
            {nome: 'Compartilhar Localização'},
            {nome: 'Ativar Modo Escuro'}
        ]
    });


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
            
        </S.ConfigContainer>
      
        
    );
  }