import {FormInputProps} from './types'
import * as S from './styles'
import TextInputMask from 'react-native-text-input-mask';
import { useState } from 'react';



export function FormInput({ placeholder, secureTextEntry, value, onChangeText, keyboardType, style }: FormInputProps){

    return (

        <S.FormContainer style={style}>
            <S.FormInput 
                placeholder={placeholder} 
                secureTextEntry={secureTextEntry} 
                value={value} 
                onChangeText={onChangeText} 
                autoCorrect={false}
                autoCapitalize='none' 
                keyboardType={keyboardType}
                
            />
      </S.FormContainer>

    )
}