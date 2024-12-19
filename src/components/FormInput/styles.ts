import styled from 'styled-components/native'
import { css } from 'styled-components/native';

export const FormContainer = styled.View`
    gap: 15px;
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