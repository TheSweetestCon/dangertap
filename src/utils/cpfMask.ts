export const applyMask = (text: string) => {
    // Remove tudo que não for número
    const numericText = text.replace(/\D/g, '');

    // Aplica a máscara do CPF
    const maskedText = numericText
        .replace(/^(\d{3})(\d)/, '$1.$2') // Primeiro ponto
        .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3') // Segundo ponto
        .replace(/\.(\d{3})(\d{1,2})$/, '.$1-$2'); // Traço final

    return maskedText;
};