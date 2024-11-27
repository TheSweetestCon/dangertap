import { useRef, useState } from 'react'
import * as S from './styles'
import {ButtonProps} from './types'
import { Animated } from 'react-native'
import theme from '../../global/theme'

export function Button({ label, onPress }: ButtonProps){

    const [isHovered, setIsHovered] = useState(false)

    const animationValue = useRef(new Animated.Value(0)).current;

    function handleAnimation(toValue: number) {
        Animated.timing(animationValue, {
            toValue,
            duration: 100,
            useNativeDriver: false
        }).start()
    }

    const backgroundColor = animationValue.interpolate({
        inputRange: [0,1],
        outputRange: [theme.colors.title, 'orange']
    })
  
    return (
        <S.ButtonContainer>

            <Animated.View 
            style={{
                backgroundColor,
                borderRadius: 40,
                borderWidth: 0,
                overflow: "hidden"}} >

                <S.ButtonPressable 
                    onPress={onPress}
                    onPressIn={() => {
                            setIsHovered(true);
                            handleAnimation(1)
                        }
                    }
                    onPressOut={() => {
                        setIsHovered(false);
                        handleAnimation(0);
                      }}  
                    isHovered={isHovered} 
                >
                    <S.ButtonText>{label}</S.ButtonText>
                </S.ButtonPressable>

            </Animated.View>

        </S.ButtonContainer>
        

    )
}