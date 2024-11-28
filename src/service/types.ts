export type ResponsavelType = {
    ID_RESPONSAVEL: number,
    RESPONSAVEL: string,
    ID_PESSOA: string,
    NOME: string,
    LATITUDE: number,
    LONGITUDE: number,
    PRECISAO: number,
}

export type UserType = {
    ID: number,
    NOME: string,
    EMAIL: string
}

export type LoginResponseType = {
    data: {
        token: string;
        user: UserType;
    }
}