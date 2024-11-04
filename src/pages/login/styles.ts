import styled from 'styled-components/native'
import { css } from 'styled-components/native';

export const AreaView = styled.SafeAreaView`
    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.colors.background};
        justifyContent: center;
        alignItems: center;
    `}
`;

export const LogoContainer = styled.View`

    justify-content: center;
    align-items: center;
    
`;

export const Image = styled.Image``;

export const LogoText = styled.Text`

    ${({theme}) => css`
        font-size: 30px;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        line-height: 80px;
        color: ${theme.colors.title};
    `}

    
`;

export const FormContainer = styled.View`
    gap: 15px;
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
    margin-bottom: 15px;
    
`;

export const FormInput = styled.TextInput`
    ${({theme}) => css`
        height: 50px;
        padding-left: 20px;
        padding-right: 20px;
        border-color: ${theme.colors.title};
        border-width: 1px;
        border-radius: 40px;
    `}
`;

export const OptionsContainer = styled.View`
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-bottom: 15px;
`;

export const SwitchView = styled.View`
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: center;
`;

export const Switch = styled.Switch``;

export const RememberSwitch = styled.Text`
    font-size: 13px;
`;

export const ForgetView = styled.View``;

export const ForgetPressable = styled.Pressable``;

export const ForgetText = styled.Text`
    ${({theme}) => css`
        font-size: 13px;
        color: ${theme.colors.default_font};
    `}
`;

export const ButtonContainer = styled.View`
    width: 100%;
    padding-left: 90px;
    padding-right: 90px;
`;

export const ButtonPressable = styled.Pressable`
    ${({theme}) => css `
        background-color: ${theme.colors.title};
        border-color: ${theme.colors.title};
        border-width: 1px;
        border-radius: 40px;
        align-items: center;
        justify-content: center;
        height: 45px;
    `}
`;

export const ButtonText = styled.Text`
    ${({theme}) => css`
        color: ${theme.colors.background};
        font-size: 18px;
        font-weight: bold;
    `}
`;

export const Footer = styled.View``;

export const SignUpText = styled.Text`
    ${({theme}) => css`
        color: ${theme.colors.default_font};
        text-align: center;
        font-size: 13px;
        margin-top: 15px;
        
    `}
`;

export const SignUpPressable = styled.Pressable``;

export const SignUpPressableText = styled.Text`
    ${({theme}) => css`
        color: ${theme.colors.title};
        font-size: 13px;
        margin-left: 5px;
        top: 2.5px;
    `}
`;
