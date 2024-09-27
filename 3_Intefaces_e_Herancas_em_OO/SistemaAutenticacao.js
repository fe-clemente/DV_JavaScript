export class SistemaAutenticacao {
    static login(funcionario, senha) {   // estatic, verifica o funcionario e valor da senha
        return funcionario.senha == senha;  // expressao boleane se o que retorna, devolve para o login


    }
}