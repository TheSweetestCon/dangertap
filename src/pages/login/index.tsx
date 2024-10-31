import Logo from '../../assets/img/logo.png'
import React, { useState } from 'react'
import * as S from './styles'

export function Login(){
  const [click,setClick] = useState(false);
  const [username,setUsername] =  useState("");
  const [password,setPassword] =  useState("");
  return (
    <S.AreaView>
        <S.LogoContainer>
            <S.Image source={Logo}/>
            <S.LogoText>Danger Tap!</S.LogoText>
        </S.LogoContainer>
      <S.FormContainer>
        <S.FormInput placeholder='Email' value={username} onChangeText={setUsername} autoCorrect={false}
        autoCapitalize='none' />
        <S.FormInput placeholder='Senha' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false}
        autoCapitalize='none'/>
      </S.FormContainer>
      <S.OptionsContainer>
        <S.SwitchView>
          <S.Switch  value={click} onValueChange={setClick} trackColor={{true : "#ff2d55" , false : "gray"}} />
            <S.RememberSwitch>Lembrar</S.RememberSwitch>
        </S.SwitchView>
        <S.ForgetView>
          <S.ForgetPressable onPress={() => alert("Forget Password!")}>
            <S.ForgetText>Esqueceu a senha?</S.ForgetText>
          </S.ForgetPressable>
        </S.ForgetView>
      </S.OptionsContainer>
      <S.ButtonContainer>
        <S.ButtonPressable onPress={() => alert("Login Successfuly!")}>
          <S.ButtonText>Entrar</S.ButtonText>
        </S.ButtonPressable>
      </S.ButtonContainer>
      <S.Footer>
        <S.SignUpText>Não tem uma conta?
            <S.SignUpPressable onPress={() => alert("Criou conta!")}>
                <S.SignUpPressableText>Criar</S.SignUpPressableText>
            </S.SignUpPressable>
        </S.SignUpText>
      </S.Footer>
    </S.AreaView>
  )
}

