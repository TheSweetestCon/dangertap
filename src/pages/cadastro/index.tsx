import React, { useState } from "react";
import * as S from './styles'
import { FormInput } from "../../components/FormInput";
import { Button } from "../../components/Button";
import {DatePicker} from '../../components/DatePicker'
import { applyMask } from "../../utils/cpfMask";
import { SelectList } from 'react-native-dropdown-select-list'
import theme from "../../global/theme";

export function Cadastro(){
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmaSenha, setConfirmaSenha] = useState("")
    const [cpf, setCpf] = useState("")
    const [data_nascimento, setData_nascimento] = useState("")
    const [genero, setGenero] = useState("")
    const [errorMessage, setErrorMessage] = useState('');
    

    function handleCreateAcc() {
        alert("Criou conta!")
      }

      function handleDate(date: any) {
        console.log("Data selecionada:", date.toLocaleDateString('pt-BR'));
      }
    
    
    const handleChange = (text: string) => {
        // Limita a quantidade de números no CPF (11 dígitos)
        if (text.replace(/\D/g, '').length <= 11) {
            const maskedText = applyMask(text);
            setCpf(maskedText);
        }
    };
    

    return (
        <S.AreaView>
            <S.LogoContainer>
                <S.LogoText>Cadastro</S.LogoText>
            </S.LogoContainer>

            <S.ErrorView>
                {errorMessage ? <S.ErrorMessage>{errorMessage}</S.ErrorMessage> : null}
            </S.ErrorView>
        <S.FormContainer>
            <FormInput 
                placeholder="Nome completo" 
                secureTextEntry={false} 
                value={nome} 
                onChangeText={setNome} 
            />

            <FormInput 
                placeholder="CPF" 
                secureTextEntry={false} 
                value={cpf} 
                onChangeText={handleChange} 
                keyboardType="numeric"
            />


            <S.List>
                
            <DatePicker onDateSelected={handleDate}/>
                <SelectList
                    setSelected={(val: string) => setGenero(val)}
                    data={[
                        {key: 'M', value: 'Masculino'},
                        {key: 'F', value: 'Feminino'},
                        {key: null, value: 'Prefiro não responder'}
                    ]}
                    save="value"
                    placeholder="Gênero"
                    search={false}
                    boxStyles={{borderRadius: 40,
                                width: '100%',
                                height: 50,
                                borderColor: theme.colors.title,
                                borderWidth: 1,
                                alignItems: 'center',
                    }}
                />
            </S.List>
            

            <FormInput 
                placeholder="Email" 
                secureTextEntry={false} 
                value={email} 
                onChangeText={setEmail} 
            />

            <FormInput 
                placeholder="Senha" 
                secureTextEntry={true} 
                value={senha} 
                onChangeText={setSenha} 
            />

            <FormInput 
                placeholder="Confirmar senha" 
                secureTextEntry={true} 
                value={confirmaSenha} 
                onChangeText={setConfirmaSenha} 
            />
        </S.FormContainer>

        <Button label="Criar conta" onPress={handleCreateAcc} />

            


        </S.AreaView>

    )
}