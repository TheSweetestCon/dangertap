import { useRef, useState } from 'react'
import * as S from './styles'
import {ButtonProps} from './types'
import { Animated } from 'react-native'
import theme from '../../global/theme'

export function Button({ label, onPress }: ButtonProps){


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
        outputRange: [theme.colors.title, theme.colors.text_white]
    })

    const textColor = animationValue.interpolate({
        inputRange: [0,1],
        outputRange: [theme.colors.text_white, theme.colors.title]
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
                            handleAnimation(1)
                        }
                    }
                    onPressOut={() => {
                        handleAnimation(0);
                      }}  
                     
                >
                    <Animated.Text 
                        style={{
                            color: textColor,
                            fontSize: 18,
                            fontWeight: 'bold',
                            textTransform: 'capitalize'
                        }}
                    >
                       {label}
                    </Animated.Text>
                </S.ButtonPressable>

            </Animated.View>

        </S.ButtonContainer>
        

    )
}