import styled from 'styled-components/native'
import { Platform, StyleSheet } from 'react-native';
import theme from '../../global/theme';

export const ButtonTap = styled.Pressable`

        border-width: 0px;
        height: 145px;
        width: 100%;
        justify-content: space-around;
        padding-left: 20px;
        padding-right: 20px;
        align-items: center;
        border-radius: 13px;
        flex-direction: row;

    
`;

export const styles = StyleSheet.create({
    container: {
        borderRadius: 13,
            borderWidth: 5,
            borderColor: theme.colors.title,
            overflow: 'hidden',
            flexDirection: 'row',
    },
    circle: {
        width: 93,
        height: 93,
        borderRadius: 46.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 96,
        fontWeight: 'bold',
        textAlign: 'center',

    }
})