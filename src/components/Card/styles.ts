import styled from 'styled-components/native';
import { css } from 'styled-components/native';

export const CardContainer = styled.View`
    flex: 1;
    width: 100%;
    flex-direction: row;
    gap: 14px;
    align-items: center;
`;

export const UserImage = styled.Image`
    ${({theme}) => css`
        border-color: ${theme.colors.light_text};
        height: 46px;
        width: 46px;
        border-width: 2px;
        border-radius: 50px;
    `}
`;

export const LastLocationTextContainer = styled.View`
    flex-direction: column;
`;

export const LastLocationTextName = styled.Text`
    ${({theme}) => css`
        font-size: 20px;
        font-weight: bold;
        color: ${theme.colors.dark_text};
        text-transform: capitalize;
    `}
`;

export const LastLocationTextTime = styled.Text`
    ${({theme}) => css`
        font-size: 14px;
        color: ${theme.colors.light_text};
        font-weight: normal;
    `}
`;