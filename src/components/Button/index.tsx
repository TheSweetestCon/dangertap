import * as S from './styles'
import {ButtonProps} from './types'

export function Button({ label, onPress }: ButtonProps){

    return (

        <S.ButtonContainer>
            <S.ButtonPressable onPress={onPress}>
            <S.ButtonText>{label}</S.ButtonText>
            </S.ButtonPressable>
        </S.ButtonContainer>

    )
}