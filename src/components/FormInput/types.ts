import { KeyboardTypeOptions, TextInput } from "react-native"

export type FormInputProps = {
    placeholder: string,
    secureTextEntry: boolean,
    value: string,
    onChangeText: (text: string) => void,
    keyboardType?: KeyboardTypeOptions | undefined,

}