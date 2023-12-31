function validarCpf(cpf) {
    if (cpf.length !== 11 && cpf.length !== 0) {
      return {valido: false, texto: "CPF deve ter 11 dígitos"}
    }
    return {valido: true, texto: ""}
}

function validarSenha(senha) {
    if (senha.length < 4 && senha.length > 0) {
      return {valido: false, texto: "Campo deve ter entre 4 e 72 dígitos."}
    }
    return {valido: true, texto: ""}
}

export {validarCpf, validarSenha}