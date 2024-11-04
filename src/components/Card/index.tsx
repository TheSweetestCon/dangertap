import { CardProps } from "./types";
import * as S from './styles'

export function Card({ icon, user, lastLocation } : CardProps) {
    return (
        <S.CardContainer>
            <S.UserImage source={icon} />
            <S.LastLocationTextContainer>
                <S.LastLocationTextName>{user}</S.LastLocationTextName>
                <S.LastLocationTextTime>{lastLocation}</S.LastLocationTextTime>
            </S.LastLocationTextContainer>
        </S.CardContainer>
    )
}