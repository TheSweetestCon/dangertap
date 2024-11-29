import React, { useContext, useEffect, useState } from "react";
import * as S from './styles'
import CustomMap from '../../components/Map'
import { Alert, RefreshControl, ScrollView, Text, View } from "react-native";
import { Card } from "../../components/Card";
import { Separator } from "../../components/Separator";
import { AuthContext } from "../../global/AuthContext/AuthGlobal";
import { ResponsavelType } from '../../service/types'
import { SafeAreaView } from "react-native-safe-area-context";
import { TapButton } from "../../components/TapButton";


  export function Home() {
    const authContext = useContext(AuthContext)
    const [responsavel, setReponsavel] = useState<ResponsavelType[]>([])
    const [refresh, setRefresh] = useState(false)


    async function buscaResponsavel(){
        try {
            if(authContext?.user){
                const data = await authContext.getResponsavel(authContext.user.id)
                setReponsavel((prevResponsavel) => {
                    // Aqui você pode verificar se houve uma mudança no nome ou outros dados
                    if (prevResponsavel !== data) {
                        return [...data];  // Força a atualização ao criar uma nova referência do array
                    }
                    return prevResponsavel;
                });
            }
        } catch (error: any) {
            console.log('Erro ao buscar responável: ', error)
            if((error.status === 401) && (error.message === "TokenExpiredError")){
                console.log(`Status: ${error.status} | Erro: ${error.message}`)
            }
        }
    }

    const onRefresh = React.useCallback(() => {
        console.log(authContext?.isAuthenticated)
        if (!authContext?.isAuthenticated) {
            // Se a autenticação falhar, mostra o alerta de sessão expirada
            Alert.alert(
                'Sessão Expirada',
                'Sua sessão expirou, por favor faça login novamente.',
                [
                    { text: 'OK', onPress: () => {} } // Quando o usuário clicar em "OK", nada será feito
                ]
            );
            setRefresh(false);  // Para o refresh se a sessão expirou
            return;  // Não continua com a atualização de dados
        }

        setRefresh(true)
        setTimeout(() => {
            setRefresh(false)
        }, 2000)
        buscaResponsavel();
    }, [authContext])

    useEffect(() => {
        buscaResponsavel()
    }, [authContext])

    
    return (
        <SafeAreaView edges={['right', 'left', 'top']}>
            <ScrollView 
                showsVerticalScrollIndicator={false} 
                refreshControl={
                    <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
                }
            >
                <S.HomeContainer>
                    <S.Header>
                        <S.HomeText>DangerTAP</S.HomeText>
                    </S.Header>

                    
                    <S.MapContainer>
                    <CustomMap 
                        style={{borderRadius: 15}}
                        scrollEnabled={false} 
                        zoomEnabled={false} 
                        rotateEnabled={false} 
                        showsUserLocation={false} 
                        showMarker={true}
                        timeInterval={60000}
                    />
                    </S.MapContainer>
                    
                    <TapButton />
                    
                    <S.ListContainer>
                    {responsavel && responsavel?.map((item: ResponsavelType, index: number) => (
                        <View key={index} style={{gap: 12}}>
                            <Card user={item.NOME} lastLocation="Casa" icon={require('../../assets/img/cachorro.jpg')}/>
                            {index < (responsavel.length-1) && <Separator/>}
                        </View>
                    ))}   
                    </S.ListContainer>
                
                </S.HomeContainer>
            </ScrollView>
        </SafeAreaView>
    );
  }