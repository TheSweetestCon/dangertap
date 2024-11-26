import { Switch, Text, View } from "react-native";
import {ToggleSwitchProps} from './types'
import { useState } from "react";
import theme from "../../global/theme";
import * as S from './styles'



export function ToggleSwitch({ label }: ToggleSwitchProps){
    const [click,setClick] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    return (
        <S.ToggleContainer>
            <S.LabelText>{label}</S.LabelText>
            <Switch 
                value={click} 
                onValueChange={setClick} 
                trackColor={{true : theme.colors.title , false : "gray"}} />
        </S.ToggleContainer>
    )
}