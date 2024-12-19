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
        padding-top: 40px;
        padding-bottom: 20px;
        gap: 17px;
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
        text-transform: capitalize;
    `}
`;

export const MapContainer = styled.View`
    ${({theme}) => css`
        background-color: ${theme.colors.text_white};
        width: 100%;
        height: 180px;
        border-radius: 15px;
        align-items: center;
        justify-content: center;
    `}
    
`;

export const LoadingText = styled.Text`
    font-size: 20px;
    
`;

export const LastLocationContainer = styled.View`
    ${({theme}) => css`
        background-color: ${theme.colors.text_white};
        align-items: center;
        justify-content: center;
        width: 100%;
        border-radius: 13px;
        flex: 1;
        flex-direction: row;
        padding: 20px 20px 30px 20px;
        gap: 10px;
    `}
`;  

export const ListContainer = styled.View`
    ${({theme}) => css`
        background-color: ${theme.colors.text_white};
        width: 100%;
        gap: 12px;
        border-radius: 13px;
        padding: 30px;
    `}
`;