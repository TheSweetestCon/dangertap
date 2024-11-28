import React, { useContext, useEffect, useState } from "react";
import * as S from './styles'
import CustomMap from '../../components/Map'
import { ScrollView, Text, View } from "react-native";
import { Card } from "../../components/Card";
import { Separator } from "../../components/Separator";
import { AuthContext } from "../../global/AuthContext/AuthGlobal";
import { ResponsavelType } from '../../service/types'

  export function Home() {
    const authContext = useContext(AuthContext)
    const [responsavel, setReponsavel] = useState<ResponsavelType[] | null>(null)

    useEffect(() => {
        async function buscaResponsavel(){
            try {
                if(authContext?.user){
                    const data = await authContext.getResponsavel(authContext.user.id)
                    setReponsavel(data)
                }
            } catch (error) {
                console.log('Erro ao buscar responável: ', error)
            }
        }
        buscaResponsavel()
    }, [authContext])

    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
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
                <S.ButtonTap>
                    <S.ButonTapImg>
                        <S.ButtonTapText>
                            !
                        </S.ButtonTapText>
                    </S.ButonTapImg>
                    <S.ButtonTextTap>
                        TAP
                    </S.ButtonTextTap>
                </S.ButtonTap>
                
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
        
    );
  }