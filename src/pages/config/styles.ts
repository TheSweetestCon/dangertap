import styled from 'styled-components/native'
import { css } from 'styled-components/native';

export const ConfigContainer = styled.View`
    ${({theme}) => css`
        background-color: ${theme.colors.background};
        flex: 1;
        width: 100%;
        flex-direction: column;
        align-items: center;
        position: relative;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 90px;
        gap: 17px;
    `}  
    
`;

export const Header = styled.View`
    width: 100%;
    height: 50px;
    justify-content: center;
    margin-bottom: 20px;
`;

export const ConfigText = styled.Text`
    ${({theme}) => css`
        color: ${theme.colors.title};
        font-size: 36px;
        font-weight: bold;
        text-align: left;
    `}
`;

export const SettingsContainer = styled.View`
    ${({theme}) => css`
        background-color: ${theme.colors.text_white};
        align-items: center;
        justify-content: center;
        width: 100%;
        border-radius: 13px;
        flex-direction: column;
        padding: 20px;
        gap: 15px;
    `}
`;

export const Options = styled.View`
    width: 100%;
    gap: 8px;
    flex-direction: column;
`;

export const SwitchView = styled.View`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const SwitchText = styled.Text`
    ${({theme}) => css`
        color: ${theme.colors.dark_text};
        font-size: 16px;
        font-weight: normal;
        text-align: left;
    `}
`;
