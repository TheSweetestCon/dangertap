import {FormInputProps} from './types'
import * as S from './styles'



export function FormInput({ placeholder, secureTextEntry, value, onChangeText }: FormInputProps){

    return (

        <S.FormContainer>
            <S.FormInput placeholder={placeholder} secureTextEntry={secureTextEntry} value={value} onChangeText={onChangeText} autoCorrect={false}
        autoCapitalize='none' />
      </S.FormContainer>

    )
}