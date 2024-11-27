import styled from "styled-components/native";
import {css} from "styled-components/native";

export const ButtonContainer = styled.View`
    width: 100%;
    padding-left: 90px;
    padding-right: 90px;
`;

export const ButtonPressable = styled.Pressable<{ isHovered: boolean }>`
    border-width: 0px;
    border-radius: 40px;
    align-items: center;
    justify-content: center;
    height: 45px;
`;

export const ButtonText = styled.Text`
    ${({theme}) => css`
        color: ${theme.colors.background};
        font-size: 18px;
        font-weight: bold;
        text-transform: capitalize;
    `}
`;