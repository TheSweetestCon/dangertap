import * as S from './styles'
import {TextPressableProps} from './types'

export function TextPressable({ label, color, onPress }: TextPressableProps){

    return (

        <S.SignUpPressable onPress={onPress}>
            <S.SignUpPressableText style={{color: color}} >{label}</S.SignUpPressableText>
        </S.SignUpPressable>

    )
}