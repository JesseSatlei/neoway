export function clearCpfCnpj(cpfCnpj: string) {
    if (cpfCnpj != '' && cpfCnpj != 'NULL') {
        let newCpfCnpj = cpfCnpj.replace('.', '').replace('.', '').replace('/','').replace('-', '');
        return newCpfCnpj;
    }
}