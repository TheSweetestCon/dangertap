import React from "react";
import { Text } from "react-native";
import * as S from './styles'
import CustomMap from "../../components/Map";

export function Mapa() {
    return (
        <S.MapContainer>
            <CustomMap 
                scrollEnabled={true}
                zoomEnabled={true} 
                rotateEnabled={true} 
                showMarker={false} 
                showsUserLocation={true}
                timeInterval={1000}
                />
        </S.MapContainer>
      
        
    );
  }