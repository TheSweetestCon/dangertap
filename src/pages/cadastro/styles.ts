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
    padding-left: 40;
    padding-right: 40;
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

export const FormFieldView = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const List = styled.View`
    flex-direction: row;
    width: 100%;

    justify-content: right;
    
`;


