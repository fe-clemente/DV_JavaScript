
export class Funcionario {
    constructor(nome, salario, cpf) { // dados vindo pelo construtor
        this._nome = nome;                   // colocando como privado
        this._salario = salario;                 // atribuindo 
        this._cpf = cpf;


        this._bonificacao = 1; // bonificao é deiferente entre gerente e diretor, 1 é o multiplicador
        this.senha;               //nivel de acesso
    }

    get senha() {
        return this._senha;  // mantem o encapsulamento da senha sem ninguem possa atribuir, apenas em cadastran senha
    }

    cadastrarSenha(senha) {
        this._senha = senha;     // incia com o senha do construtor em cima
    }
}