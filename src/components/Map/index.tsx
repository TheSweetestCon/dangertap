import React, { useEffect, useState, useRef } from "react";
import MapView, {Marker, Region} from "react-native-maps";
import * as Location from 'expo-location';
import { Text } from "react-native";
import { MapProps } from "./types";
import { useLocation } from "../../global/LocationContext/LocationContext";

export default function CustomMap({
    style,
    showsUserLocation = true,
    scrollEnabled = false,
    zoomEnabled = false,
    rotateEnabled = false,
    showMarker = false,
    timeInterval = 1000
  }: MapProps) {
    const { location, setLocation } = useLocation();

    const mapRef = useRef<MapView>(null);
    const [mapReady, setMapReady] = useState(false);
  
    useEffect(() => {
      let locationSubscription: Location.LocationSubscription | undefined;
      
      //Pedir a permissão do usuario para pegar a localizacao
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.log("Permissão de localização negada");
          return;
        }

        //Ficar verficando se a posição do usuario mudou
        locationSubscription = await Location.watchPositionAsync(
          {
            //Pegando alta precisão da localização, o tempo de atualização é passada por parâmetro
            accuracy: Location.Accuracy.High,
            timeInterval: timeInterval,
            distanceInterval: 1,
          },
          (newLocation) => {
            const { latitude, longitude } = newLocation.coords;
            const region: Region = {
              latitude,
              longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
          };
          setLocation(region);

          }
          
        );
      })();
  
      return () => {
        if (locationSubscription) {
          locationSubscription.remove();
        }
      };
    }, [mapReady, timeInterval, setLocation]); //So executa o mapa depois de estar pronto

  
    if (!location) {
      return <Text>Carregando mapa...</Text>;
    }
    
    //Função para mostrar o marcador no mapa
    function renderMarker(){
        if (showMarker && location) {
          return <Marker coordinate={location} title="Você está aqui" />;
        }
        return null;
      };
  
    return (
        <MapView
            ref={mapRef}
            style={[{ width: "100%", height: "100%"}, style]}
            region={location}
            showsUserLocation={showsUserLocation}
            scrollEnabled={scrollEnabled}
            zoomEnabled={zoomEnabled}
            rotateEnabled={rotateEnabled}
            onMapReady={() => setMapReady(true)}>
            {renderMarker()}
        </MapView>
    );
  };