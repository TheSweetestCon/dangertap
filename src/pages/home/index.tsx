import React, { useContext, useEffect, useState } from "react";
import * as S from './styles'
import CustomMap from '../../components/Map'
import { Alert, Modal, Platform, RefreshControl, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Card } from "../../components/Card";
import { Separator } from "../../components/Separator";
import { AuthContext } from "../../global/AuthContext/AuthGlobal";
import { ResponsavelType } from '../../service/types'
import { SafeAreaView } from "react-native-safe-area-context";
import { TapButton } from "../../components/TapButton";
import { useLocation } from "../../global/LocationContext/LocationContext";
import { auth } from "firebase-admin";
import theme from "../../global/theme";
import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";


  export function Home() {
    const authContext = useContext(AuthContext)
    const [responsavel, setReponsavel] = useState<ResponsavelType[]>([])
    const [refresh, setRefresh] = useState(false)
    const { location } = useLocation()
    const [modalVisible, setModalVisible] = useState(false)
    const [email, setEmail] = useState('')

    function handleOpenModal() {
        setModalVisible(true)
    }

    function handleCloseModal() {
        setEmail('')
        setModalVisible(false)
    }

    async function handleDangerTAP() {
        if(!authContext?.user.id){
            return
        } else {
            await authContext.sendNotification(authContext.user.id, authContext.user.nome, location?.latitude, location?.longitude, 4, true)
        }
    }

    async function handleRegisterResponsavel() {
        try {
            if(authContext?.isAuthenticated){
                const response = await authContext.registerResponsavel(authContext.user.id, email)

                if(response.status === 200){
                    Alert.alert(
                        'Responsável cadastrado',
                        'Responsável cadastrado com sucesso!',
                        [
                            { text: 'OK', onPress: () => {} }
                        ]
                    )
                }

                console.log('RESPONSE: ', response)
                setEmail('')
                setModalVisible(false)
                await buscaResponsavel()
            }
        } catch (error: any) {
            console.log('Erro ao cadastrar responsável: ', error)

            if(error.status === 400){
                Alert.alert(
                    'Erro ao cadastrar responsável',
                    'Preencha o campo de email.',
                    [
                        { text: 'OK', onPress: () => {} }
                    ]
                )
                return
            
            }

            if(error.status === 403){
                Alert.alert(
                    'Erro ao cadastrar responsável',
                    'Não é possível cadastrar a si próprio como responsável.',
                    [
                        { text: 'OK', onPress: () => {} }
                    ]
                )
                return
            
            }
            
            if (error.status === 404){
                Alert.alert(
                    'Erro ao cadastrar responsável',
                    'Usuário não encontrado.',
                    [
                        { text: 'OK', onPress: () => {} }
                    ]
                )
                return
            }

            if (error.status === 409){
                Alert.alert(
                    'Erro ao cadastrar responsável',
                    'Usuário já é responsável.',
                    [
                        { text: 'OK', onPress: () => {} }
                    ]
                )
                return
            }

            if (error.status === 500){
                Alert.alert(
                    'Erro ao cadastrar responsável',
                    'Erro no servidor.',
                    [
                        { text: 'OK', onPress: () => {} }
                    ]
                )
                return
            }

        }
    }

    async function buscaResponsavel(){
        try {
            if(authContext?.user){
                console.log('ID DO USUARIO: ',authContext.user.id)
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
                        {authContext?.user.nome ? <S.HomeText>Olá, {authContext?.user.nome.split(' ')[0]}!</S.HomeText>
                        : <S.HomeText>DangerTAP</S.HomeText>}
                        <Text></Text>
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
                    
                    <TapButton onPress={handleDangerTAP} />
                    <View style={{width: '100%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{
                            fontSize: 20, 
                            fontWeight: 'bold',
                            textAlign: 'left',
                            color: theme.colors.dark_text
                        }}>Você é responsável por:</Text>
                        <Button label='+' style={Platform.OS === 'ios' ? {width: 45, borderRadius: 45} : {width: 45, borderRadius: 45}} onPress={handleOpenModal}/>
                        
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={handleCloseModal}
                        >
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <View style={{ width: 300, padding: 20, backgroundColor: theme.colors.background, borderRadius: 15, gap: 20 }}>
                                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: theme.colors.title }}>Cadastrar</Text>
                                        <FormInput placeholder='Email do responsável' value={email} onChangeText={setEmail} secureTextEntry={false} />
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', gap: 15 }}>
                                        <TouchableOpacity onPress={handleCloseModal} >
                                            <Text style={{ color: theme.colors.title, fontSize: 16 }}>Cancelar</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={handleRegisterResponsavel} >
                                            <Text style={{ color: theme.colors.title, fontSize: 16 }}>Enviar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>
                    
                    <S.ListContainer>
                    {responsavel.length > 0 
                        ? responsavel?.map((item: ResponsavelType, index: number) => (
                            <View key={index} style={{gap: 12}}>
                                <Card user={item.NOME} lastLocation="Casa" icon={require('../../assets/img/cachorro.jpg')}/>
                                {index < (responsavel.length-1) && <Separator/>}
                            </View>
                            ))
                        :   <>
                                <Text style={{
                                        textAlign: 'center', 
                                        fontSize: 16, 
                                        fontWeight: 'bold',
                                        color: theme.colors.dark_text
                                    }}
                                >Parece que ninguém cadastrou você como um responsável!</Text>
                                
                            </>
                    }   
                    </S.ListContainer>
                
                </S.HomeContainer>
            </ScrollView>
        </SafeAreaView>
    );
  }