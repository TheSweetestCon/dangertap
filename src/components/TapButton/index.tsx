import { Animated, Platform } from 'react-native';
import theme from '../../global/theme';
import * as S from './styles'
import { useRef } from 'react';
import { TapButtonProps } from './types';

export function TapButton({onPress}: TapButtonProps) {

    const animationValue = useRef(new Animated.Value(0)).current;

    function handleAnimation(toValue: number) {
        Animated.timing(animationValue, {
            toValue,
            duration: 150,
            useNativeDriver: false
        }).start()
    }

    const backgroundColor = animationValue.interpolate({
        inputRange: [0,1],
        outputRange: [theme.colors.text_white, theme.colors.title]
    })

    const imgBackgroungColor = animationValue.interpolate({
        inputRange: [0,1],
        outputRange: [theme.colors.title, theme.colors.text_white]
    })


    const textColor = animationValue.interpolate({
        inputRange: [0,1],
        outputRange: [theme.colors.text_white, theme.colors.title]
    })

    return(
        <Animated.View style={{
            ...S.styles.container,
            backgroundColor,
        }}>
        <S.ButtonTap
            onPress={onPress}
            onPressIn={() => {
                handleAnimation(1)
            }}
            onPressOut={() => {
                handleAnimation(0);
              }}  
             
        >         
        <Animated.View style={{
             ...S.styles.circle,
             backgroundColor: imgBackgroungColor,
        }}>
            <Animated.Text style={{
                ...S.styles.text,
                color: textColor,
                lineHeight: 96,
                ...(Platform.OS === 'ios' && { top: 8 }),
                ...(Platform.OS === 'android' && {
                    lineHeight: 96, 
                    top: 11,     
                    left: -1,       
                  }),
            }}>
                !
            </Animated.Text>
        </Animated.View> 

        <Animated.Text style={{
                ...S.styles.text,
                width: '65%',
                color: imgBackgroungColor
            }}>
                TAP
            </Animated.Text>
            
            
        </S.ButtonTap> 
        </Animated.View>
        
    )
}