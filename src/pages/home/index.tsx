import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import * as S from './styles'
import MapView, {Marker, Region} from 'react-native-maps';
import * as Location from 'expo-location';

type LocationType = {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  } | null;

  export function Home() {
    const [location, setLocation] = useState<LocationType>(null);
  
    useEffect(() => {
      let locationSubscription: Location.LocationSubscription | undefined;
  
      (async () => {
        // Solicitar permissão de localização ao usuário
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log("Permissão de localização negada");
          return;
        }
  
        // Obter atualizações de localização em tempo real
        locationSubscription = await Location.watchPositionAsync({
            accuracy: Location.Accuracy.High,
            timeInterval: 1000, // Intervalo mínimo entre atualizações em milissegundos
            distanceInterval: 1, // Distância mínima em metros entre atualizações
        }, (newLocation) => {
                setLocation({
                    latitude: newLocation.coords.latitude,
                    longitude: newLocation.coords.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                });
            }
        );
      })();
  
      // Limpar a assinatura de localização quando o componente for desmontado
      return () => {
        if (locationSubscription) {
          locationSubscription.remove();
        }
      };
    }, []);

    return (
        <S.HomeContainer>
            <S.Header>
                <S.HomeText>DangerTAP</S.HomeText>
            </S.Header>
            <S.MapContainer>
            {location ? (
                <MapView
                    style={{ width: "100%", height: "100%" }}
                    region={location as Region}
                    showsUserLocation={true}
                    scrollEnabled={false}
                    zoomEnabled={false} 
                    rotateEnabled={false}
                >
                    
                </MapView>
                ) : (
                <S.LoadingText>Carregando mapa...</S.LoadingText>
            )}
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
        </S.HomeContainer>
      
        
    );
  }