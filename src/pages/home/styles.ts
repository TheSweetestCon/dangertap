import styled from 'styled-components/native'
import { css } from 'styled-components/native';
import { Platform } from 'react-native';

export const HomeContainer = styled.View`
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
        gap: 30px;
    `}
    
    
`;

export const Header = styled.View`
    
    width: 100%;
    height: 50px;
    justify-content: center;
`;

export const HomeText = styled.Text`
    ${({theme}) => css`
        color: ${theme.colors.title};
        font-size: 36px;
        font-weight: bold;
        text-align: left;
    `}
`;

export const MapContainer = styled.View`
    ${({theme}) => css`
        background-color: ${theme.colors.text_white};
        width: 100%;
        height: 248px;
        border-radius: 15px;
        align-items: center;
        justify-content: center;
    `}
    
`;

export const LoadingText = styled.Text`
    font-size: 20px;
    
`;

export const ButtonTap = styled.TouchableOpacity`
    ${({theme}) => css`
        background-color: ${theme.colors.text_white};
        border-color: ${theme.colors.title};
        border-width: 3px;
        height: 145px;
        width: 100%;
        justify-content: space-around;
        padding-left: 20px;
        padding-right: 20px;
        align-items: center;
        border-radius: 13px;
        flex-direction: row;
    `}
    
`;

export const ButonTapImg = styled.View`
    ${({theme}) => css`
        background-color: ${theme.colors.title};
        width: 93px;
        height: 93px;
        border-radius: 46.5px;
        justify-content: center;
        align-items: center;
    `}
`;

export const ButtonTapText = styled.Text`
    ${({theme}) => css`
        color: ${theme.colors.text_white};
        font-size: 96px;
        font-weight: bold;
        text-align: center;
        line-height: 96px;
        ${Platform.OS === 'android' && `
            line-height: 96px;
            top: 11px;
            left: -1px;
        `}
        ${Platform.OS === 'ios' && `
            top: 8px;
        `}
    `}
`;

export const ButtonTextTap = styled.Text`
    ${({theme}) => css`
        color: ${theme.colors.title};
        font-size: 96px;
        font-weight: bold;
        width: 65%;
        text-align: center;
    `}
`;