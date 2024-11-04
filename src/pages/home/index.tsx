import React, { useEffect, useState } from "react";
import * as S from './styles'
import CustomMap from '../../components/Map'
import { FlatList, ScrollView } from "react-native";
import { Card } from "../../components/Card";

type LocationType = {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  } | null;

  export function Home() {
    

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
                    timeInterval={1000}
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
                    <Card user="Kevyn" lastLocation="Casa" icon={require('../../assets/img/cachorro.jpg')}/>
                    <Card user="Matheus" lastLocation="Trabalho" icon={require('../../assets/img/cachorro.jpg')}/>
                    <Card user="Natário" lastLocation="Restaurante" icon={require('../../assets/img/cachorro.jpg')}/>
                    <Card user="Sara" lastLocation="Taverna Medieval" icon={require('../../assets/img/cachorro.jpg')}/>
                    <Card user="Roberta" lastLocation="Ibirapuera" icon={require('../../assets/img/cachorro.jpg')}/>
                </S.ListContainer>
               
            </S.HomeContainer>
        </ScrollView>
        
    );
  }