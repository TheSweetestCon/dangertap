import * as S from './styles'
import {ButtonProps} from './types'
import { AnimatedButton } from '../AnimatedButton'
import theme from '../../global/theme'

export function Button({ label, onPress }: ButtonProps){

  
    return (
        <S.ButtonContainer>

            <AnimatedButton
                style={{
                    borderWidth: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 45,
                }}
                colorPressIn={theme.colors.text_white}
                colorPressOut={theme.colors.title}
                borderRadius={40}
                label={label}
                onPress={onPress}
            />


        </S.ButtonContainer>
        

    )
}