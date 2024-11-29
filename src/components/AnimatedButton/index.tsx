import { useEffect, useRef } from 'react'
import { Animated, Platform, Pressable } from 'react-native'
import theme from '../../global/theme'
import { AnimatedButtonProps } from './types'

export function AnimatedButton({label, onPress, onPressIn, onPressOut, style, borderRadius, colorPressIn, colorPressOut}: AnimatedButtonProps) {
    const animationValue = useRef(new Animated.Value(0)).current

    function handleAnimation(toValue: number) {
        Animated.timing(animationValue, {
            toValue,
            duration: 150,
            useNativeDriver: false
        }).start()
    }


    const backgroundColor = animationValue.interpolate({
        inputRange: [0,1],
        outputRange: [colorPressOut, colorPressIn]
    })

    const textColor = animationValue.interpolate({
        inputRange: [0,1],
        outputRange: [colorPressIn, colorPressOut]
    })

    return (
        <Animated.View
            style={[{backgroundColor, borderRadius}]}
        >
            <Pressable
                style={[style, {
                    
                }]}
                onPress={onPress}
                onPressIn={() => {
                    handleAnimation(1);
                    if (onPressIn) onPressIn();
                }}
                onPressOut={() => {
                    handleAnimation(0);
                    if (onPressOut) onPressOut();
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

            </Pressable>

        </Animated.View>
    )

}