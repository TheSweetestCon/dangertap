export interface AnimatedButtonProps {
    onPress?: () => void;
    label: string;
    style?: object;
    onPressIn?: () => void;
    onPressOut?: () => void;
    borderRadius?: number;
    colorPressIn: string
    colorPressOut: string
}