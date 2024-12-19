export function validateCPF(cpf: string): boolean {
    // Remove caracteres não numéricos
    const sanitizedCPF = cpf.replace(/[^\d]/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (sanitizedCPF.length !== 11) return false;

    // Verifica se todos os dígitos são iguais (ex: "111.111.111-11" é inválido)
    if (/^(\d)\1{10}$/.test(sanitizedCPF)) return false;

    // Calcula o primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(sanitizedCPF[i]) * (10 - i);
    }
    let firstVerifier = (sum * 10) % 11;
    if (firstVerifier === 10) firstVerifier = 0;

    // Verifica o primeiro dígito
    if (firstVerifier !== parseInt(sanitizedCPF[9])) return false;

    // Calcula o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(sanitizedCPF[i]) * (11 - i);
    }
    let secondVerifier = (sum * 10) % 11;
    if (secondVerifier === 10) secondVerifier = 0;

    // Verifica o segundo dígito
    if (secondVerifier !== parseInt(sanitizedCPF[10])) return false;

    return true;
}
