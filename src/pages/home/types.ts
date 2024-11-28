import { ResponsavelType } from '../../service/types'

export type AuthContextData = {
    user: {
        id: number;
        nome: string
    } | null;
    getResponsavel: (id: number) => Promise<ResponsavelType[]>
}