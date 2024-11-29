import { Switch, Text, View } from "react-native";
import {ToggleSwitchProps} from './types'
import { useState } from "react";
import theme from "../../global/theme";
import * as S from './styles'



export function ToggleSwitch({ label, onToggle }: ToggleSwitchProps){
    const [isToggled,setIsToggled] = useState(false);

    function handleToggle(value: boolean) {
        setIsToggled(value)
        if(onToggle){
            onToggle(value)
        }
    }

    return (
        <S.ToggleContainer>
            <S.LabelText>{label}</S.LabelText>
            <Switch 
                value={isToggled} 
                onValueChange={handleToggle} 
                trackColor={{true : theme.colors.title , false : "gray"}} />
        </S.ToggleContainer>
    )
}