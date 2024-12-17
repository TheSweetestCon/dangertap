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

export const LogoText = styled.Text`

    ${({theme}) => css`
        font-size: 30px;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        line-height: 50px;
        color: ${theme.colors.title};
    `}

    
`;

export const FormContainer = styled.View`
    gap: 15px;
    width: 100%;

    margin-bottom: 15px;
    
`;

export const ErrorView = styled.View`
  width: 100%;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

export const ErrorMessage = styled.Text`
  color: red;
  font-size: 13px;
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

export const Footer = styled.View`
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin-top: 15px;
`;

export const SignUpText = styled.Text`
    ${({theme}) => css`
        color: ${theme.colors.default_font};
        text-align: center;
        font-size: 13px;
    `}
`;

export const List = styled.View`
    padding-left: 20;
    padding-right: 20;
    flex-direction: row;
    gap: 10;
    
`;


