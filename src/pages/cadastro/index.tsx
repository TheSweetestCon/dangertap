import React, { useContext, useState } from "react";
import * as S from './styles'
import { FormInput } from "../../components/FormInput";
import { Button } from "../../components/Button";
import { DatePicker } from '../../components/DatePicker'
import { applyMask } from "../../utils/cpfMask";
import { SelectList } from 'react-native-dropdown-select-list'
import theme from "../../global/theme";
import { Platform, View } from "react-native";
import { validateCPF } from "../../utils/validaCPF";
import { validateEmail } from "../../utils/validateEmail";
import { AuthContext } from "../../global/AuthContext/AuthGlobal";
import { searchUserByCpf, searchUserByEmail } from "../../service/authService";

export function Cadastro() {
    const auth = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmaSenha, setConfirmaSenha] = useState("")
    const [cpf, setCpf] = useState("")
    const [data_nascimento, setData_nascimento] = useState("")
    const [genero, setGenero] = useState("")
    const [errorMessage, setErrorMessage] = useState('');

    async function handleCreateAcc() {
        setErrorMessage('');

        if (!nome || !email || !senha || !confirmaSenha || !cpf || !data_nascimento || !genero) {
            setErrorMessage('Todos os campos devem ser preenchidos!');
            return;
        }

        if (!validateCPF(cpf)) {
            setErrorMessage('CPF inválido!');
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage('Email inválido!');
            return;
        }

        if (senha !== confirmaSenha) {
            setErrorMessage('As senhas devem ser iguais!');
            return;
        }

        if (await auth?.getUserCpf(cpf.replace(/[^\d]/g, '')) === 'user_found') {
            setErrorMessage('CPF já cadastrado!');
            return;
        }
        console.log('Entrando na validação do email')
        if (await auth?.getUserEmail(email) === 'user_found') {
            setErrorMessage('Email já cadastrado!');
            return;
        }

        console.log('User can be registered');
    }

    function handleDate(date: any) {
        setData_nascimento(date.toLocaleDateString('pt-BR'))
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

                <S.FormFieldView>
                    <FormInput
                        placeholder="CPF"
                        secureTextEntry={false}
                        value={cpf}
                        onChangeText={handleChange}
                        keyboardType="numeric"
                        style={{ width: '48%' }}
                    />
                    <View style={Platform.OS === 'android' ? { width: '47%' } : { width: '57%' }}>
                        <DatePicker onDateSelected={handleDate} label="Nascimento" />
                    </View>
                </S.FormFieldView>

                <SelectList
                    setSelected={(val: string) => setGenero(val)}
                    data={[
                        { key: 'M', value: 'Masculino' },
                        { key: 'F', value: 'Feminino' },
                        { key: null, value: 'Prefiro não responder' }
                    ]}
                    save="value"
                    placeholder="Gênero"
                    search={false}
                    defaultOption={{ key: null, value: 'Prefiro não responder' }}
                    boxStyles={{
                        borderRadius: 40,
                        width: 'auto',
                        height: 50,
                        borderColor: theme.colors.title,
                        borderWidth: 1,
                        alignItems: 'center',
                    }}
                />

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

            <Button
                label="Criar conta"
                onPress={handleCreateAcc}
                style={{
                    paddingLeft: 80,
                    paddingRight: 80
                }}
            />
        </S.AreaView>
    )
}