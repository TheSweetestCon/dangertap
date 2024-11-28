
import Logo from '../../assets/img/logo'
import React, { useContext, useState } from 'react'
import * as S from './styles'
import { ToggleSwitch } from '../../components/ToggleSwitch'
import { FormInput } from '../../components/FormInput'
import { Button } from '../../components/Button'
import { TextPressable } from '../../components/TextPressable'
import theme from '../../global/theme'
import { AuthContext } from '../../global/AuthContext/AuthGlobal'


export function Login(){
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [errorMessage, setErrorMessage] = useState('');
  const auth = useContext(AuthContext)


  async function handleLogin() {

      setErrorMessage('')

      try {
        if (auth) {
          await auth.signIn(email, senha)
        }

      } catch (error: any) {

        console.log(error)

        if(error.status === 401){
          setErrorMessage('Usuário ou senha inválido(s)!')
        } else {
          setErrorMessage('Erro no servidor. Tente novamente mais tarde.')
        }

      }    
  }


  function handleCreateAcc() {
    alert("Criou conta!")
  }

  return (
    <S.AreaView>

        <S.LogoContainer>
            <Logo />
            <S.LogoText>Danger Tap!</S.LogoText>
        </S.LogoContainer>

      <S.ErrorView>
        {errorMessage ? <S.ErrorMessage>{errorMessage}</S.ErrorMessage> : null}
      </S.ErrorView>

      <FormInput placeholder='Email' secureTextEntry={false} value={email} onChangeText={setEmail} />
      <FormInput placeholder='Senha' secureTextEntry={true}  value={senha} onChangeText={setSenha} />

      
      
      <S.OptionsContainer>

        <S.SwitchView>
          <ToggleSwitch label=''/>
            <S.RememberSwitch>Lembrar</S.RememberSwitch>
        </S.SwitchView>

        <S.ForgetView>
          <TextPressable label='Esqueceu a senha?' color={theme.colors.default_font} onPress={handleCreateAcc} />
        </S.ForgetView>

      </S.OptionsContainer>


      <Button label='Entrar' onPress={handleLogin} />


      <S.Footer>
        <S.SignUpText>Não tem uma conta?</S.SignUpText>
        <TextPressable label='Criar' color={theme.colors.title} onPress={handleCreateAcc} />
      </S.Footer>


    </S.AreaView>
  )
}

